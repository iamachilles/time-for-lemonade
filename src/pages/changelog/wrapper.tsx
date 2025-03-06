import { Suspense } from "react";
import ChangelogPage from "./page";

export default function ChangelogWrapper() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-[calc(100vh-10rem)]">
          Loading changelog...
        </div>
      }
    >
      <ChangelogPage />
    </Suspense>
  );
}
