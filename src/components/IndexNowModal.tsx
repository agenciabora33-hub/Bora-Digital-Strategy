import React, { useState, useEffect } from 'react';
import {
  Zap,
  CheckCircle2,
  ExternalLink,
  RefreshCw,
  X,
  ShieldCheck,
  Globe,
  Radio,
  FileCode,
  AlertCircle
} from 'lucide-react';
import {
  INDEXNOW_KEY,
  INDEXNOW_KEY_FILE,
  INDEXNOW_SEARCH_ENGINES,
  getAllSiteUrls,
  submitToIndexNow,
  verifyIndexNowKeyFile,
  getLastSubmissionRecord,
  IndexNowResult,
} from '../utils/indexNow';

interface IndexNowModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IndexNowModal: React.FC<IndexNowModalProps> = ({ isOpen, onClose }) => {
  const [keyVerified, setKeyVerified] = useState<boolean | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<IndexNowResult | null>(null);
  const [urls, setUrls] = useState<string[]>([]);
  const [lastSubmission, setLastSubmission] = useState<{ timestamp: string; urlCount: number } | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    setUrls(getAllSiteUrls());
    setLastSubmission(getLastSubmissionRecord());

    // Verify key file existence
    verifyIndexNowKeyFile().then((res) => {
      setKeyVerified(res.valid);
    });
  }, [isOpen]);

  if (!isOpen) return null;

  const handleManualSubmit = async () => {
    setSubmitting(true);
    try {
      const res = await submitToIndexNow(urls);
      setResult(res);
      setLastSubmission(getLastSubmissionRecord());
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-2xl bg-[#181B20] border border-[#2D333B] rounded-2xl p-6 sm:p-8 shadow-2xl text-stone-200 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-gray-400 hover:text-white hover:bg-[#252A32] transition"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-white">Protocolo IndexNow Ativo</h3>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Operacional
              </span>
            </div>
            <p className="text-xs text-stone-400 mt-0.5">
              Indexação instantânea para Microsoft Bing, Yandex, Seznam e Naver
            </p>
          </div>
        </div>

        {/* Verification Status Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {/* Card 1: Key File */}
          <div className="p-4 rounded-xl bg-[#121417] border border-[#262B33]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-stone-400 flex items-center gap-1.5">
                <FileCode className="w-4 h-4 text-amber-400" />
                Arquivo de Chave UTF-8
              </span>
              {keyVerified === true && (
                <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 200 OK
                </span>
              )}
              {keyVerified === false && (
                <span className="text-xs text-rose-400 font-semibold flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> Não detectado
                </span>
              )}
              {keyVerified === null && (
                <span className="text-xs text-stone-500">Verificando...</span>
              )}
            </div>
            <a
              href={`/${INDEXNOW_KEY_FILE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-amber-400 hover:underline flex items-center gap-1 break-all"
            >
              /{INDEXNOW_KEY_FILE}
              <ExternalLink className="w-3 h-3 shrink-0" />
            </a>
            <div className="mt-2 text-[11px] text-stone-500">
              Chave: <span className="font-mono text-stone-300">{INDEXNOW_KEY}</span>
            </div>
          </div>

          {/* Card 2: Auto-Sync */}
          <div className="p-4 rounded-xl bg-[#121417] border border-[#262B33]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-stone-400 flex items-center gap-1.5">
                <Radio className="w-4 h-4 text-emerald-400" />
                Sincronização Automática
              </span>
              <span className="text-xs text-emerald-400 font-semibold">Ativa (24h)</span>
            </div>
            <p className="text-xs text-stone-300">
              Notifica motores de busca a cada publicação ou alteração de URLs do site.
            </p>
            {lastSubmission && (
              <div className="mt-2 text-[11px] text-stone-500">
                Último envio:{' '}
                <span className="text-stone-300">
                  {new Date(lastSubmission.timestamp).toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Participating Search Engines */}
        <div className="mb-6">
          <label className="text-xs font-semibold text-stone-300 mb-2 block uppercase tracking-wider">
            Motores de Busca Conectados
          </label>
          <div className="flex flex-wrap gap-2">
            {INDEXNOW_SEARCH_ENGINES.map((engine) => (
              <div
                key={engine.name}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#21262D] border border-[#30363D] text-xs text-stone-300"
              >
                <Globe className="w-3.5 h-3.5 text-amber-400" />
                <span>{engine.name}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              </div>
            ))}
          </div>
        </div>

        {/* URL List to submit */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-semibold text-stone-300 uppercase tracking-wider">
              URLs Catalogadas para Indexação ({urls.length})
            </label>
            <span className="text-[11px] text-stone-400">Prioridade Máxima</span>
          </div>
          <div className="bg-[#121417] border border-[#262B33] rounded-xl p-3 max-h-36 overflow-y-auto space-y-1 font-mono text-xs text-stone-400">
            {urls.map((u, i) => (
              <div key={i} className="flex items-center gap-2 text-stone-300 hover:text-white">
                <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                <span className="truncate">{u}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Submission Result Feedback */}
        {result && (
          <div
            className={`p-4 rounded-xl mb-6 border ${
              result.success
                ? 'bg-emerald-950/30 border-emerald-500/30 text-emerald-300'
                : 'bg-rose-950/30 border-rose-500/30 text-rose-300'
            }`}
          >
            <div className="flex items-start gap-3">
              {result.success ? (
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              )}
              <div className="text-xs">
                <div className="font-semibold text-sm mb-1">
                  {result.success ? 'Envio Concluído com Sucesso!' : 'Aviso no Envio'}
                </div>
                <p className="mb-2 text-stone-300">{result.message}</p>
                <div className="grid grid-cols-2 gap-2 text-[11px] text-stone-400 bg-black/30 p-2 rounded-lg font-mono">
                  <div>Status HTTP: <strong className="text-emerald-400">{result.statusCode} Accepted</strong></div>
                  <div>URLs Enviadas: <strong className="text-white">{result.submittedUrls.length}</strong></div>
                  <div>Host: <span className="text-stone-300 truncate">{result.host}</span></div>
                  <div>Protocolo: <span className="text-amber-400">IndexNow 1.0</span></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between pt-2 border-t border-[#262B33]">
          <p className="text-[11px] text-stone-400 text-center sm:text-left">
            Ao disparar, a API notifica imediatamente a infraestrutura de rastreamento do Bing e motores parceiros.
          </p>
          <button
            onClick={handleManualSubmit}
            disabled={submitting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 active:scale-95 text-stone-950 font-bold text-xs uppercase tracking-wider transition disabled:opacity-50 shrink-0 shadow-lg shadow-amber-500/10"
          >
            <RefreshCw className={`w-4 h-4 ${submitting ? 'animate-spin' : ''}`} />
            {submitting ? 'Notificando IndexNow...' : 'Disparar IndexNow Agora'}
          </button>
        </div>
      </div>
    </div>
  );
};
