"use client";
import { MainNav } from "@/components/common/main-nav";
import { ModeToggle } from "@/components/common/mode-toggle";
import { SiteFooter } from "@/components/common/site-footer";
import { routesConfig } from "@/config/routes";
import CustomTooltip from "@/components/ui/custom-tooltip";
import { SocialLinks } from "@/config/socials";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-50 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={routesConfig.mainNav}>
            <div className="flex items-center gap-3">
              {SocialLinks.map((item, ind) => (
                <CustomTooltip icon={item.icon} text={item.username} key={ind}>
                  <Link
                    href={item.link}
                    target="_blank"
                    className={cn(
                      buttonVariants({
                        variant: "ghost",
                        size: "sm",
                      }),
                      "h-10 w-10 p-2"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                  </Link>
                </CustomTooltip>
              ))}
              <ModeToggle />
            </div>
          </MainNav>
          <nav className="flex items-center">
            {SocialLinks.map((item, ind) => (
                <CustomTooltip icon={item.icon} text={item.username} key={ind}>
                  <Link
                    href={item.link}
                    target="_blank"
                    className={cn(
                      buttonVariants({
                        variant: "ghost",
                        size: "sm",
                      }),
                      "h-10 w-10 p-2"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                  </Link>
                </CustomTooltip>
              ))}
            <ModeToggle />
          </nav>
        </div>
      </header>
      <main className="container flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
