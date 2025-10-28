export function useToast() {
  return {
    toast: ({ title, description, variant }: any) => {
      alert(`${title}\n${description}`);
    },
  };
}
