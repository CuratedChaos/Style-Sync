import type { ToastItem } from '../../types/toast'

/* ══════════════════════════════════════════
   TOAST
══════════════════════════════════════════ */
export function ToastLayer({ toasts }: { toasts: ToastItem[] }) {
  return (
    <div className="toastWrap">
      {toasts.map(t => (
        <div key={t.id} className="toast success">
          <i className={t.icon} />
          {t.msg}
        </div>
      ))}
    </div>
  )
}
