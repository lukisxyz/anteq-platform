import { createFileRoute } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { Skeleton } from '@/components/ui/skeleton';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from '@/components/ui/context-menu';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from '@/components/ui/menubar';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Toggle } from '@/components/ui/toggle';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Spinner } from '@/components/ui/spinner';
import { Kbd } from '@/components/ui/kbd';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from '@/components/ui/input-otp';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { Calendar } from '@/components/ui/calendar';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Empty, EmptyTitle, EmptyDescription } from '@/components/ui/empty';
import { Toaster } from '@/components/ui/sonner';
import { useState } from 'react';

export const Route = createFileRoute('/components')({
  component: Components,
});

function Components() {
  return (
    <div className="min-h-svh p-6">
      <h1 className="text-3xl font-semibold mb-6">Components</h1>

      {/* Actions */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 border-b pb-2">Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DemoSection title="Button">
            <div className="flex flex-wrap gap-2">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon">
                <span className="i-lucide-plus" />
              </Button>
            </div>
          </DemoSection>

          <DemoSection title="Button Group">
            <ButtonGroup>
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </DemoSection>

          <DemoSection title="Toggle">
            <Toggle aria-label="Toggle bold">Bold</Toggle>
          </DemoSection>

          <DemoSection title="Toggle Group">
            <ToggleGroup type="multiple">
              <ToggleGroupItem value="bold" aria-label="Toggle bold">
                Bold
              </ToggleGroupItem>
              <ToggleGroupItem value="italic" aria-label="Toggle italic">
                Italic
              </ToggleGroupItem>
              <ToggleGroupItem value="underline" aria-label="Toggle underline">
                Underline
              </ToggleGroupItem>
            </ToggleGroup>
          </DemoSection>
        </div>
      </section>

      {/* Data Display */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 border-b pb-2">Data Display</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DemoSection title="Badge">
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          </DemoSection>

          <DemoSection title="Card">
            <Card className="w-[300px]">
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card content goes here.</p>
              </CardContent>
              <CardFooter>
                <Button>Action</Button>
              </CardFooter>
            </Card>
          </DemoSection>

          <DemoSection title="Avatar">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DemoSection>

          <DemoSection title="Table">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Role</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>John Doe</TableCell>
                  <TableCell>Admin</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Jane Smith</TableCell>
                  <TableCell>User</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </DemoSection>

          <DemoSection title="Progress">
            <Progress value={33} />
          </DemoSection>

          <DemoSection title="Skeleton">
            <Skeleton className="w-[100px] h-[20px]" />
          </DemoSection>
        </div>
      </section>

      {/* Forms */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 border-b pb-2">Forms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DemoSection title="Input">
            <Input placeholder="Input placeholder" />
          </DemoSection>

          <DemoSection title="Textarea">
            <Textarea placeholder="Textarea placeholder" />
          </DemoSection>

          <DemoSection title="Checkbox">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">Accept terms</Label>
            </div>
          </DemoSection>

          <DemoSection title="Switch">
            <div className="flex items-center space-x-2">
              <Switch id="airplane-mode" />
              <Label htmlFor="airplane-mode">Airplane mode</Label>
            </div>
          </DemoSection>

          <DemoSection title="Slider">
            <Slider defaultValue={[33]} max={100} step={1} />
          </DemoSection>

          <DemoSection title="Select">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            </Select>
          </DemoSection>

          <DemoSection title="Radio Group">
            <RadioGroup defaultValue="option-one">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">Option One</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">Option Two</Label>
              </div>
            </RadioGroup>
          </DemoSection>

          <DemoSection title="Label">
            <Label>Input Label</Label>
          </DemoSection>

          <DemoSection title="Input OTP">
            <InputOTP maxLength={6}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSeparator />
                <InputOTPSlot index={1} />
                <InputOTPSeparator />
                <InputOTPSlot index={2} />
                <InputOTPSeparator />
                <InputOTPSlot index={3} />
                <InputOTPSeparator />
                <InputOTPSlot index={4} />
                <InputOTPSeparator />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </DemoSection>
        </div>
      </section>

      {/* Navigation */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 border-b pb-2">Navigation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DemoSection title="Dropdown Menu">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button>Open Menu</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Menu Label</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Item 1</DropdownMenuItem>
                <DropdownMenuItem>Item 2</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </DemoSection>

          <DemoSection title="Context Menu">
            <ContextMenu>
              <ContextMenuTrigger className="flex h-[100px] w-[200px] items-center justify-center rounded-md border border-dashed border-border">
                Right click here
              </ContextMenuTrigger>
              <ContextMenuContent>
                <ContextMenuItem>Profile</ContextMenuItem>
                <ContextMenuItem>Billing</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>Subscription</ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </DemoSection>

          <DemoSection title="Menubar">
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>New Tab</MenubarItem>
                  <MenubarItem>New Window</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Close</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>Edit</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>Undo</MenubarItem>
                  <MenubarItem>Redo</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </DemoSection>

          <DemoSection title="Navigation Menu">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <p className="p-4">Navigation content</p>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </DemoSection>

          <DemoSection title="Breadcrumb">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbList>
            </Breadcrumb>
          </DemoSection>

          <DemoSection title="Tabs">
            <Tabs defaultValue="account" className="w-[300px]">
              <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>
              <TabsContent value="account">Account content</TabsContent>
              <TabsContent value="password">Password content</TabsContent>
            </Tabs>
          </DemoSection>

          <DemoSection title="Pagination">
            <Pagination>
              <PaginationContent>
                <PaginationPrevious />
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationEllipsis />
                <PaginationNext />
              </PaginationContent>
            </Pagination>
          </DemoSection>
        </div>
      </section>

      {/* Overlays */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 border-b pb-2">Overlays</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DemoSection title="Dialog">
            <Dialog>
              <DialogTrigger asChild>
                <Button>Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Dialog Title</DialogTitle>
                  <DialogDescription>Dialog description goes here.</DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button>Cancel</Button>
                  <Button>Confirm</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </DemoSection>

          <DemoSection title="Sheet">
            <Sheet>
              <SheetTrigger asChild>
                <Button>Open Sheet</Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Sheet Title</SheetTitle>
                  <SheetDescription>Sheet description goes here.</SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </DemoSection>

          <DemoSection title="Popover">
            <Popover>
              <PopoverTrigger asChild>
                <Button>Open Popover</Button>
              </PopoverTrigger>
              <PopoverContent>Popover content</PopoverContent>
            </Popover>
          </DemoSection>

          <DemoSection title="Tooltip">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button>Hover me</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Tooltip content</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </DemoSection>

          <DemoSection title="Hover Card">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button>@shadcn</Button>
              </HoverCardTrigger>
              <HoverCardContent>
                <p>Hover card content</p>
              </HoverCardContent>
            </HoverCard>
          </DemoSection>

          <DemoSection title="Alert Dialog">
            <AlertDialogDemo />
          </DemoSection>
        </div>
      </section>

      {/* Data Input */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 border-b pb-2">Data Input</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DemoSection title="Accordion">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Item 1</AccordionTrigger>
                <AccordionContent>Content 1</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Item 2</AccordionTrigger>
                <AccordionContent>Content 2</AccordionContent>
              </AccordionItem>
            </Accordion>
          </DemoSection>

          <DemoSection title="Collapsible">
            <Collapsible>
              <CollapsibleTrigger asChild>
                <Button>Toggle</Button>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <p>Collapsible content</p>
              </CollapsibleContent>
            </Collapsible>
          </DemoSection>

          <DemoSection title="Calendar">
            <Calendar
              mode="single"
              selected={new Date()}
              onSelect={() => {}}
              className="rounded-md border"
            />
          </DemoSection>
        </div>
      </section>

      {/* Feedback */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 border-b pb-2">Feedback</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DemoSection title="Alert">
            <Alert>
              <AlertTitle>Info</AlertTitle>
              <AlertDescription>This is an alert message.</AlertDescription>
            </Alert>
          </DemoSection>

          <DemoSection title="Spinner">
            <Spinner />
          </DemoSection>
        </div>
      </section>

      {/* Layout */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 border-b pb-2">Layout</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DemoSection title="Separator">
            <div className="flex flex-col gap-2">
              <p>Before</p>
              <Separator />
              <p>After</p>
            </div>
          </DemoSection>

          <DemoSection title="Scroll Area">
            <ScrollArea className="h-[100px] w-[200px] rounded-md border p-4">
              <p>Scrollable content goes here. Lorem ipsum dolor sit amet.</p>
            </ScrollArea>
          </DemoSection>

          <DemoSection title="Resizable">
            <ResizablePanelGroup direction="horizontal">
              <ResizablePanel defaultSize={50}>
                <div className="flex h-[100px] items-center justify-center p-6">Panel 1</div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={50}>
                <div className="flex h-[100px] items-center justify-center p-6">Panel 2</div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </DemoSection>

          <DemoSection title="Aspect Ratio">
            <AspectRatio ratio={16 / 9} className="bg-muted rounded-md">
              <img
                src="https://picsum.photos/800/450"
                alt="Example"
                className="h-full w-full object-cover rounded-md"
              />
            </AspectRatio>
          </DemoSection>
        </div>
      </section>

      {/* Misc */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 border-b pb-2">Misc</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DemoSection title="Kbd">
            <div className="flex items-center gap-2">
              <Kbd>⌘</Kbd>
              <span>+</span>
              <Kbd>K</Kbd>
            </div>
          </DemoSection>

          <DemoSection title="Empty State">
            <Empty>
              <EmptyTitle>No results found</EmptyTitle>
              <EmptyDescription>Try adjusting your search.</EmptyDescription>
            </Empty>
          </DemoSection>

          <DemoSection title="Carousel">
            <Carousel className="w-full max-w-xs">
              <CarouselContent>
                <CarouselItem>
                  <div className="h-[100px] flex items-center justify-center border rounded-md">
                    Slide 1
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="h-[100px] flex items-center justify-center border rounded-md">
                    Slide 2
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="h-[100px] flex items-center justify-center border rounded-md">
                    Slide 3
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </DemoSection>
        </div>
      </section>

      <Toaster />
    </div>
  );
}

function DemoSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border rounded-lg p-4">
      <h3 className="text-sm font-medium mb-3">{title}</h3>
      <div className="min-h-[60px]">{children}</div>
    </div>
  );
}

function AlertDialogDemo() {
  const [open, setOpen] = useState(false);
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button>Open Alert Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
