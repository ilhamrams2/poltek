"use client";

import { createContext, useContext, useState, ReactNode, useCallback } from "react";
import Toast, { ToastType } from "@/components/ui/Toast";
import ConfirmModal, { ConfirmType } from "@/components/ui/ConfirmModal";
import { AnimatePresence } from "framer-motion";

// --- Types ---

interface ToastData {
  id: string;
  title: string;
  message?: string;
  type: ToastType;
  duration?: number;
}

interface ConfirmOptions {
  title: string;
  description?: string;
  type?: ConfirmType;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

interface AdminUIContextType {
  toast: (data: Omit<ToastData, "id">) => void;
  confirm: (options: ConfirmOptions) => void;
}

// --- Context ---

const AdminUIContext = createContext<AdminUIContextType | undefined>(undefined);

export function useAdminUI() {
  const context = useContext(AdminUIContext);
  if (!context) {
    throw new Error("useAdminUI must be used within an AdminUIProvider");
  }
  return context;
}

// --- Provider ---

export function AdminUIProvider({ children }: { children: ReactNode }) {
  // Toasts State
  const [toasts, setToasts] = useState<ToastData[]>([]);

  // Confirm Modal State
  const [confirmState, setConfirmState] = useState<{
    isOpen: boolean;
    options: ConfirmOptions | null;
  }>({
    isOpen: false,
    options: null,
  });

  // --- Actions ---

  const addToast = useCallback((data: Omit<ToastData, "id">) => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts((prev) => [...prev, { ...data, id }]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const openConfirm = useCallback((options: ConfirmOptions) => {
    setConfirmState({ isOpen: true, options });
  }, []);

  const closeConfirm = useCallback(() => {
    setConfirmState((prev) => ({ ...prev, isOpen: false }));
  }, []);

  const handleConfirmAction = useCallback(() => {
    if (confirmState.options?.onConfirm) {
      confirmState.options.onConfirm();
    }
    closeConfirm();
  }, [confirmState.options, closeConfirm]);

  const handleCancelAction = useCallback(() => {
    if (confirmState.options?.onCancel) {
      confirmState.options.onCancel();
    }
    closeConfirm();
  }, [confirmState.options, closeConfirm]);

  return (
    <AdminUIContext.Provider value={{ toast: addToast, confirm: openConfirm }}>
      {children}

      {/* Toast Container - Fixed Position */}
      <div className="fixed top-4 right-4 z-[9999] flex flex-col gap-2 pointer-events-none">
        <AnimatePresence>
          {toasts.map((t) => (
            <Toast 
              key={t.id} 
              {...t} 
              onClose={removeToast} 
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Confirm Modal Container */}
      {confirmState.options && (
        <ConfirmModal
          id="global-confirm-modal"
          isOpen={confirmState.isOpen}
          title={confirmState.options.title}
          description={confirmState.options.description}
          type={confirmState.options.type || "info"}
          confirmLabel={confirmState.options.confirmLabel || "Confirm"}
          cancelLabel={confirmState.options.cancelLabel || "Cancel"}
          onConfirm={handleConfirmAction}
          onCancel={handleCancelAction}
        />
      )}
    </AdminUIContext.Provider>
  );
}
