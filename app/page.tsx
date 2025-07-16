import { Button } from "@/components/buildui/button";
import { Badge } from "@/components/buildui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { Switch } from "@/components/buildui/switch";
import {
  AlertCircle,
  BadgeCheck,
  Check,
  Star,
  Timer,
  GitBranch,
  Package,
  Bell,
} from "lucide-react";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <ThemeToggle />
        <div className="flex flex-col gap-6 items-center">
          <h3 className="text-amber-400 font-mono text-lg">Button Variants</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button>Default</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>

          <h3 className="text-amber-400 font-mono text-lg mt-6">
            Button Sizes
          </h3>
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon">⚡</Button>
          </div>

          <h3 className="text-amber-400 font-mono text-lg mt-6">
            Badge Shapes
          </h3>
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Badge shape="square">square</Badge>
            <Badge shape="round">round</Badge>
            <Badge shape="triangle">triangle</Badge>
            <Badge shape="ribbon-1">ribbon 1</Badge>
            <Badge shape="ribbon-2">ribbon 2</Badge>
          </div>

          <h3 className="text-amber-400 font-mono text-lg mt-6">
            Shape + Variant
          </h3>
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Badge shape="square" variant="default">
              Default Square
            </Badge>
            <Badge shape="round" variant="destructive">
              Round Error
            </Badge>
            <Badge variant="outline">Triangle Outline</Badge>
            <Badge shape="ribbon-1" variant="secondary">
              Ribbon Secondary
            </Badge>
            <Badge shape="ribbon-2" variant="default">
              Ribbon Default
            </Badge>
          </div>

          <h3 className="text-amber-400 font-mono text-lg mt-6">With Icons</h3>
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Badge
              shape="ribbon-1"
              variant="secondary"
              className="bg-blue-500 text-white dark:bg-blue-600 hover:bg-blue-600/90"
            >
              <GitBranch className="size-4" />
              Pull Requests 12
            </Badge>
            <Badge shape="triangle" variant="destructive">
              <AlertCircle className="size-3" />
              Warning
            </Badge>
            <Badge variant="outline">
              <Star className="size-3" />
              Featured
            </Badge>
            <Badge shape="round" variant="secondary">
              <Timer className="size-3" />
              Pending
            </Badge>
          </div>
          <h3 className="text-amber-400 font-mono text-lg">Switch</h3>
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Switch />
            <span>Default</span>
            <Switch disabled />
            <span>Disabled</span>
          </div>
        </div>
      </main>
    </div>
  );
}
