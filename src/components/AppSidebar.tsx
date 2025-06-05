
import { Home, User, FolderOpen, Mail } from "lucide-react";
import { useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const menuItems = [
  {
    title: "Home",
    sectionId: "home",
    icon: Home,
  },
  {
    title: "About",
    sectionId: "about",
    icon: User,
  },
  {
    title: "Projects",
    sectionId: "projects",
    icon: FolderOpen,
  },
  {
    title: "Contact",
    sectionId: "contact",
    icon: Mail,
  },
];

export function AppSidebar() {
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Sidebar className="border-r border-slate-700">
      <SidebarHeader className="p-6 flex flex-row items-center justify-between">
        <button 
          onClick={() => scrollToSection('home')}
          className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity"
        >
          Portfolio
        </button>
        <SidebarTrigger className="md:hidden" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    className="w-full justify-start px-6 py-3 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 cursor-pointer"
                    onClick={() => scrollToSection(item.sectionId)}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
