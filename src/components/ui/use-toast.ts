export function useToast() {
  return {
    toast: ({ title, description }: { title?: string; description?: string }) => {
      // Simple browser alert for demonstration
      alert(`${title ? title + "\n" : ""}${description || ""}`);
    },
  };
}