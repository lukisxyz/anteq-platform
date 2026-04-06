import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-svh items-center justify-center">
      <h1 className="text-4xl font-semibold">Welcome</h1>
    </div>
  );
}
