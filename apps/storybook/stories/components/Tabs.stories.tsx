import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@educacross/ui";

const meta: Meta<typeof Tabs> = {
    title: "Components/Tabs",
    component: Tabs,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component:
                    "Tabs organize content into separate views where only one view can be visible at a time.",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

/**
 * Default tabs with uncontrolled state.
 */
export const Default: Story = {
    render: () => (
        <Tabs defaultValue="account" className="w-[400px]">
            <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
                <div className="p-4 border rounded-md mt-2">
                    <h3 className="font-semibold">Account Settings</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                        Manage your account preferences and personal information.
                    </p>
                </div>
            </TabsContent>
            <TabsContent value="password">
                <div className="p-4 border rounded-md mt-2">
                    <h3 className="font-semibold">Password</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                        Change your password and security settings.
                    </p>
                </div>
            </TabsContent>
            <TabsContent value="settings">
                <div className="p-4 border rounded-md mt-2">
                    <h3 className="font-semibold">General Settings</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                        Configure application preferences.
                    </p>
                </div>
            </TabsContent>
        </Tabs>
    ),
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        // Verify default tab content is visible
        await expect(canvas.getByText("Account Settings")).toBeVisible();

        // Click on Password tab
        const passwordTab = canvas.getByRole("tab", { name: /password/i });
        await userEvent.click(passwordTab);

        // Verify Password content is now visible
        await expect(canvas.getByText(/change your password/i)).toBeVisible();

        // Click on Settings tab
        const settingsTab = canvas.getByRole("tab", { name: /settings/i });
        await userEvent.click(settingsTab);

        // Verify Settings content is now visible
        await expect(canvas.getByText(/configure application/i)).toBeVisible();
    },
};

/**
 * Controlled tabs with external state.
 */
export const Controlled: Story = {
    render: () => {
        const [value, setValue] = useState("tab1");

        return (
            <div className="space-y-4">
                <div className="flex gap-2">
                    <button
                        className="px-3 py-1 border rounded text-sm"
                        onClick={() => setValue("tab1")}
                    >
                        Go to Tab 1
                    </button>
                    <button
                        className="px-3 py-1 border rounded text-sm"
                        onClick={() => setValue("tab2")}
                    >
                        Go to Tab 2
                    </button>
                </div>
                <p className="text-sm text-muted-foreground">Active: {value}</p>

                <Tabs value={value} onValueChange={setValue} className="w-[400px]">
                    <TabsList>
                        <TabsTrigger value="tab1">First Tab</TabsTrigger>
                        <TabsTrigger value="tab2">Second Tab</TabsTrigger>
                    </TabsList>
                    <TabsContent value="tab1">
                        <div className="p-4 border rounded-md">Content for first tab</div>
                    </TabsContent>
                    <TabsContent value="tab2">
                        <div className="p-4 border rounded-md">Content for second tab</div>
                    </TabsContent>
                </Tabs>
            </div>
        );
    },
};

/**
 * Outline variant tabs.
 */
export const OutlineVariant: Story = {
    render: () => (
        <Tabs defaultValue="overview" variant="outline" className="w-[400px]">
            <TabsList variant="outline">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
                <div className="p-4 border-x border-b rounded-b-md">
                    Overview content with outline variant.
                </div>
            </TabsContent>
            <TabsContent value="analytics">
                <div className="p-4 border-x border-b rounded-b-md">
                    Analytics data and charts.
                </div>
            </TabsContent>
            <TabsContent value="reports">
                <div className="p-4 border-x border-b rounded-b-md">
                    Generated reports.
                </div>
            </TabsContent>
        </Tabs>
    ),
};

/**
 * Pills variant tabs.
 */
export const PillsVariant: Story = {
    render: () => (
        <Tabs defaultValue="all" variant="pills" className="w-[400px]">
            <TabsList variant="pills">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
                <TabsTrigger value="archived">Archived</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
                <div className="p-4 mt-2">Showing all items</div>
            </TabsContent>
            <TabsContent value="active">
                <div className="p-4 mt-2">Showing active items only</div>
            </TabsContent>
            <TabsContent value="completed">
                <div className="p-4 mt-2">Showing completed items</div>
            </TabsContent>
            <TabsContent value="archived">
                <div className="p-4 mt-2">Showing archived items</div>
            </TabsContent>
        </Tabs>
    ),
};

/**
 * Disabled tab trigger.
 */
export const WithDisabled: Story = {
    render: () => (
        <Tabs defaultValue="enabled" className="w-[400px]">
            <TabsList>
                <TabsTrigger value="enabled">Enabled</TabsTrigger>
                <TabsTrigger value="premium" disabled>
                    Premium (Locked)
                </TabsTrigger>
                <TabsTrigger value="other">Other</TabsTrigger>
            </TabsList>
            <TabsContent value="enabled">
                <div className="p-4 border rounded-md">Available content</div>
            </TabsContent>
            <TabsContent value="other">
                <div className="p-4 border rounded-md">Other content</div>
            </TabsContent>
        </Tabs>
    ),
};

/**
 * Tabs in a card context.
 */
export const InCard: Story = {
    render: () => (
        <div className="border rounded-lg shadow-sm overflow-hidden w-[450px]">
            <div className="p-4 border-b bg-muted/50">
                <h3 className="font-semibold">User Profile</h3>
            </div>
            <Tabs defaultValue="profile" className="w-full">
                <div className="border-b">
                    <TabsList className="w-full justify-start rounded-none bg-transparent h-auto p-0">
                        <TabsTrigger
                            value="profile"
                            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                        >
                            Profile
                        </TabsTrigger>
                        <TabsTrigger
                            value="activity"
                            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                        >
                            Activity
                        </TabsTrigger>
                        <TabsTrigger
                            value="notifications"
                            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                        >
                            Notifications
                        </TabsTrigger>
                    </TabsList>
                </div>
                <TabsContent value="profile" className="p-4 m-0">
                    <div className="space-y-2">
                        <p className="font-medium">John Doe</p>
                        <p className="text-sm text-muted-foreground">john@example.com</p>
                    </div>
                </TabsContent>
                <TabsContent value="activity" className="p-4 m-0">
                    <p className="text-sm text-muted-foreground">Recent activity will appear here.</p>
                </TabsContent>
                <TabsContent value="notifications" className="p-4 m-0">
                    <p className="text-sm text-muted-foreground">Notification preferences.</p>
                </TabsContent>
            </Tabs>
        </div>
    ),
};

/**
 * Tabs com estilo arredondado (Educacross).
 */
export const Rounded: Story = {
    render: () => (
        <div className="w-full">
            <div className="relative bg-white rounded-md">
                {/* Container principal */}
                <div className="flex items-center justify-between px-6 py-3">
                    {/* Tabs */}
                    <Tabs defaultValue="redes" variant="rounded" className="w-auto">
                        <TabsList variant="rounded" className="gap-0">
                            <TabsTrigger value="redes" variant="rounded" className="relative z-10 min-w-[132px]">
                                Redes
                            </TabsTrigger>
                            <TabsTrigger value="escolas" variant="rounded" className="relative z-10 min-w-[132px] -ml-3">
                                Escolas
                            </TabsTrigger>
                            <TabsTrigger value="professores" variant="rounded" className="relative z-10 min-w-[132px] -ml-3">
                                Professores
                            </TabsTrigger>
                        </TabsList>
                    </Tabs>
                    
                    {/* Nome da escola */}
                    <div className="flex items-center gap-2 text-primary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-6 h-6"
                        >
                            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                            <path d="M6 12v5c3 3 9 3 12 0v-5" />
                        </svg>
                        <span className="text-sm font-bold uppercase">COLÉGIO FLORESTA ENCANTADA</span>
                    </div>
                </div>
                
                {/* Linha inferior roxa */}
                <div className="w-full h-0.5 bg-primary" />
            </div>
        </div>
    ),
};

/**
 * Tabs arredondadas apenas (sem contexto adicional).
 */
export const RoundedSimple: Story = {
    render: () => (
        <div className="w-full max-w-2xl">
            <div className="relative bg-white rounded-md shadow-sm">
                <Tabs defaultValue="tab1" variant="rounded">
                    <div className="px-6 py-3">
                        <TabsList variant="rounded" className="gap-0">
                            <TabsTrigger value="tab1" variant="rounded" className="relative z-10 min-w-[132px]">
                                Primeira Tab
                            </TabsTrigger>
                            <TabsTrigger value="tab2" variant="rounded" className="relative z-10 min-w-[132px] -ml-3">
                                Segunda Tab
                            </TabsTrigger>
                            <TabsTrigger value="tab3" variant="rounded" className="relative z-10 min-w-[132px] -ml-3">
                                Terceira Tab
                            </TabsTrigger>
                        </TabsList>
                    </div>
                    
                    {/* Linha inferior roxa */}
                    <div className="w-full h-0.5 bg-primary" />
                    
                    <TabsContent value="tab1" className="p-6">
                        <div className="space-y-2">
                            <h3 className="font-semibold text-lg">Conteúdo da Primeira Tab</h3>
                            <p className="text-muted-foreground">
                                Este é o conteúdo da primeira aba com o novo estilo arredondado.
                            </p>
                        </div>
                    </TabsContent>
                    <TabsContent value="tab2" className="p-6">
                        <div className="space-y-2">
                            <h3 className="font-semibold text-lg">Conteúdo da Segunda Tab</h3>
                            <p className="text-muted-foreground">
                                Aqui está o conteúdo da segunda aba.
                            </p>
                        </div>
                    </TabsContent>
                    <TabsContent value="tab3" className="p-6">
                        <div className="space-y-2">
                            <h3 className="font-semibold text-lg">Conteúdo da Terceira Tab</h3>
                            <p className="text-muted-foreground">
                                E este é o conteúdo da terceira aba.
                            </p>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    ),
};
