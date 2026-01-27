type LayoutIconName = string;
type LayoutBreadcrumbItem = {
    label: string;
    href?: string;
};
type LayoutSidebarItem = {
    label: string;
    href?: string;
    icon?: LayoutIconName;
    active?: boolean;
};
type LayoutConfig = {
    sidebar?: {
        title?: string;
        items: LayoutSidebarItem[];
        footerText?: string;
    };
    header?: {
        title?: string;
        breadcrumb?: LayoutBreadcrumbItem[];
    };
};
declare const layoutConfigSchema: {
    readonly $schema: "https://json-schema.org/draft/2020-12/schema";
    readonly title: "Nextcraft UI Layout Config";
    readonly type: "object";
    readonly additionalProperties: false;
    readonly properties: {
        readonly sidebar: {
            readonly type: "object";
            readonly additionalProperties: false;
            readonly properties: {
                readonly title: {
                    readonly type: "string";
                };
                readonly footerText: {
                    readonly type: "string";
                };
                readonly items: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly additionalProperties: false;
                        readonly properties: {
                            readonly label: {
                                readonly type: "string";
                            };
                            readonly href: {
                                readonly type: "string";
                            };
                            readonly icon: {
                                readonly type: "string";
                            };
                            readonly active: {
                                readonly type: "boolean";
                            };
                        };
                        readonly required: readonly ["label"];
                    };
                };
            };
            readonly required: readonly ["items"];
        };
        readonly header: {
            readonly type: "object";
            readonly additionalProperties: false;
            readonly properties: {
                readonly title: {
                    readonly type: "string";
                };
                readonly breadcrumb: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly additionalProperties: false;
                        readonly properties: {
                            readonly label: {
                                readonly type: "string";
                            };
                            readonly href: {
                                readonly type: "string";
                            };
                        };
                        readonly required: readonly ["label"];
                    };
                };
            };
        };
    };
};

export { type LayoutBreadcrumbItem, type LayoutConfig, type LayoutIconName, type LayoutSidebarItem, layoutConfigSchema };
