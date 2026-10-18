import { createFileRoute } from "@tanstack/react-router";
import { NightMargin } from "@/components/vn/NightMargin";

export const Route = createFileRoute("/")({
  component: NightMargin,
});
