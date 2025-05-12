<script lang="ts">
  import { CloseButton, Sidebar, SidebarGroup, SidebarItem, SidebarButton, uiHelpers } from "flowbite-svelte";
  import { ChartOutline, GridSolid, MailBoxSolid, UndoOutline, UsersGroupSolid, UserSolid } from "flowbite-svelte-icons";
  import { page } from "$app/state";
  import { onMount } from "svelte";
  let { children } = $props();
  let activeUrl = $state(page.url.pathname);
  const spanClass = "flex-1 ms-3 whitespace-nowrap";
  const demoSidebarUi = uiHelpers();
  let isDemoOpen = $state(false);
  const closeDemoSidebar = demoSidebarUi.close;
  $effect(() => {
    isDemoOpen = demoSidebarUi.isOpen;
    activeUrl = page.url.pathname;
  });
</script>

<div class="h-full min-h-screen bg-gradient-to-l from-blue-400 to-teal-500 flex flex-col">
    <!-- Mobile header -->
    <div class="fixed top-0 left-0 w-full bg-gray-100 dark:bg-gray-800 shadow-md z-40 md:hidden">
      <div class="flex items-center px-4 py-3">
        <SidebarButton onclick={demoSidebarUi.toggle} class="text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-md" />
        <h1 class="text-xl font-semibold text-gray-800 dark:text-white ml-4">Admin Panel</h1>
      </div>
    </div>
    
    <!-- Sidebar for larger screens -->
    <div class="w-full mt-14 md:mt-0">
    <Sidebar {activeUrl} backdrop={true} isOpen={isDemoOpen} closeSidebar={closeDemoSidebar} params={{ x: -50, duration: 50 }} class="z-40 h-screen pt-6 fixed left-0 top-0 w-64" position="fixed" activeClass="p-2" nonActiveClass="p-2 hidden sm:block">
        <CloseButton onclick={closeDemoSidebar} color="gray" class="absolute top-2 right-2 p-2 md:hidden" />
        <SidebarGroup>
        <SidebarItem label="Dashboard" href="/clubAdminPanel">
            {#snippet icon()}
            <ChartOutline class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
            {/snippet}
        </SidebarItem>
        <SidebarItem label="Events Management" {spanClass} href="/clubAdminPanel/eventManagement">
            {#snippet icon()}
            <GridSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
            {/snippet}
            {#snippet subtext()}
            <span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300"></span>
            {/snippet}
        </SidebarItem>
        <SidebarItem label="Alerts" {spanClass} href="/clubAdminPanel/alerts">
            {#snippet icon()}
            <MailBoxSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
            {/snippet}
            {#snippet subtext()}
            <span class="bg-primary-200 text-primary-600 dark:bg-primary-900 dark:text-primary-200 ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full p-3 text-sm font-medium">3</span>
            {/snippet}
        </SidebarItem>
        <SidebarItem label="Member Management" href="/clubAdminPanel/memberManagement">
            {#snippet icon()}
            <UsersGroupSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
            {/snippet}
        </SidebarItem>
        <SidebarItem label="Account" href="/clubAdminPanel/account">
            {#snippet icon()}
            <UserSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
            {/snippet}
        </SidebarItem>
        <SidebarItem label="Exit" href="/">
            {#snippet icon()}
            <UndoOutline class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
            {/snippet}
        </SidebarItem>
        </SidebarGroup>
    </Sidebar>
    
    <!-- Main content area that adjusts based on sidebar state -->
    <div class="flex-1 md:ml-64 transition-all duration-300">
        <div class="p-4 md:p-6">
            <div class="mt-16 md:mt-2">
                {@render children()}
            </div>
        </div>
    </div>
    </div>
</div>