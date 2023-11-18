import { Icons } from "@/icons";

export default function HomeLoading() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Icons.spinner className="h-12 w-12 animate-spin" aria-hidden="true" />
    </div>
  );
}
