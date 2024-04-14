import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

  import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  CircleUser,
  Menu,
  Package2,
} from "lucide-react"
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";


function CompanysPage() {
  return (
   <>
        <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
            <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <Link
                to={"/dashboard"}
                className="flex items-center gap-2 text-lg font-semibold md:text-base"
            >
                <img className="w-6 h-6" src="../../public/logo/Logo Files/For Web/svg/Black logo - no background.svg" alt="" />
            </Link>
            <Link
                to={"/dashboard"}
                className="text-foreground transition-colors hover:text-foreground"
            >
                Dashboard
            </Link>
            <Link
                to={"/orders"}
                className="text-muted-foreground transition-colors hover:text-foreground"
            >
                Orders
            </Link>
            <Link
                to={"/companys"}
                className="text-muted-foreground transition-colors hover:text-foreground"
            >
                Companys
            </Link>
            <Link
                 to={"/customers"}
                className="text-muted-foreground transition-colors hover:text-foreground"
            >
                Customers
            </Link>
            <Link
                to={"/analytics"}
                className="text-muted-foreground transition-colors hover:text-foreground"
            >
                Analytics
            </Link>
            </nav>
            <Sheet>
            <SheetTrigger asChild>
                <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
                >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <nav className="grid gap-6 text-lg font-medium">
                <Link
                    to={"/dashboard"}
                    className="flex items-center gap-2 text-lg font-semibold"
                >
                    <Package2 className="h-6 w-6" />
                    <span className="sr-only">Acme Inc</span>
                </Link>
                <Link to={"/dashboard"} className="hover:text-foreground">
                    Dashboard
                </Link>
                <Link
                to={"/orders"}
                    className="text-muted-foreground hover:text-foreground"
                >
                    Orders
                </Link>
                <Link
                     to={"/companys"}
                    className="text-muted-foreground hover:text-foreground"
                >
                    Companys
                </Link>
                <Link
                    to={"/customers"}
                    className="text-muted-foreground hover:text-foreground"
                >
                    Customers
                </Link>
                <Link
                    to={"/analytics"}
                    className="text-muted-foreground hover:text-foreground"
                >
                    Analytics
                </Link>
                </nav>
            </SheetContent>
            </Sheet>
            <div className="flex  absolute right-4 items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
            
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                <Button variant="secondary" size="icon" className="rounded-full">
                    <CircleUser className="h-5 w-5" />
                    <span className="sr-only">Toggle user menu</span>
                </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
                

                {/* All Compnays  */}
                <div>
                    <Card x-chunk="dashboard-05-chunk-3">
                    <CardHeader className="px-7">
                        <CardTitle>Companys</CardTitle>
                        <CardDescription>
                        companys from your manage.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                        <TableHeader>
                            <TableRow>
                            <TableHead>Compnay</TableHead>
                            <TableHead className="hidden sm:table-cell">
                                Email
                            </TableHead>
                            <TableHead className="hidden sm:table-cell">
                                Phone
                            </TableHead>
                            <TableHead className="hidden md:table-cell">
                                Address
                            </TableHead>
                            <TableHead className="hidden md:table-cell">
                                Active
                            </TableHead>
                            <TableHead className="hidden md:table-cell">
                                Actions
                            </TableHead>
                            </TableRow>
                        </TableHeader>
                        {/* body content  */}
                        <TableBody>
                            <TableRow className="bg-accent">
                                <TableCell>
                                    <div className="font-medium">Hufnan</div>
                                </TableCell>
                                <TableCell className="hidden sm:table-cell">
                                    <small className="text-sm  leading-none">hufnan@gmail.com</small>
                                </TableCell>
                                <TableCell className="hidden sm:table-cell">
                                +252619486823
                                </TableCell>
                                <TableCell className="hidden md:table-cell">
                                    <address>Madiino</address>
                                </TableCell>
                                <TableCell className="text-start max-w-20">
                                    True
                                </TableCell>

                                <TableCell className="text-start max-w-20 space-x-1 flex">
                                    <Badge className="cursor-pointer">Edit</Badge>
                                    <Badge className="cursor-pointer" variant="destructive">Delete</Badge>
                                </TableCell> 
                            </TableRow>
                            
                            <TableRow className="bg-accent">
                                <TableCell>
                                    <div className="font-medium">Heegan</div>
                                </TableCell>
                                <TableCell className="hidden sm:table-cell">
                                    <small className="text-sm  leading-none">heegan@gmail.com</small>
                                </TableCell>
                                <TableCell className="hidden sm:table-cell">
                                +252617523532
                                </TableCell>
                                <TableCell className="hidden md:table-cell">
                                    <address>KM4 TALEX</address>
                                </TableCell>
                                <TableCell className="text-start max-w-20">
                                    True
                                </TableCell>

                                <TableCell className="text-start max-w-20 space-x-1 flex">
                                    <Badge className="cursor-pointer">Edit</Badge>
                                    <Badge className="cursor-pointer" variant="destructive">Delete</Badge>
                                </TableCell> 
                            </TableRow>

                            <TableRow className="bg-accent">
                                <TableCell>
                                    <div className="font-medium">Nadifiye</div>
                                </TableCell>
                                <TableCell className="hidden sm:table-cell">
                                    <small className="text-sm  leading-none">nadifiye@gmail.com</small>
                                </TableCell>
                                <TableCell className="hidden sm:table-cell">
                                +2526143252525
                                </TableCell>
                                <TableCell className="hidden md:table-cell">
                                    <address>BAKARO</address>
                                </TableCell>
                                <TableCell className="text-start max-w-20">
                                    True
                                </TableCell>

                                <TableCell className="text-start max-w-20 space-x-1 flex">
                                    <Badge className="cursor-pointer">Edit</Badge>
                                    <Badge className="cursor-pointer" variant="destructive">Delete</Badge>
                                </TableCell> 
                            </TableRow>

                            <TableRow className="bg-accent">
                                <TableCell>
                                    <div className="font-medium">Deegan Dhowr</div>
                                </TableCell>
                                <TableCell className="hidden sm:table-cell">
                                    <small className="text-sm  leading-none">deegandhowr@gmail.com</small>
                                </TableCell>
                                <TableCell className="hidden sm:table-cell">
                                +252610868763
                                </TableCell>
                                <TableCell className="hidden md:table-cell">
                                    <address>KM4 Hodan</address>
                                </TableCell>
                                <TableCell className="text-start max-w-20">
                                    True
                                </TableCell>

                                <TableCell className="text-start max-w-20 space-x-1 flex">
                                    <Badge className="cursor-pointer">Edit</Badge>
                                    <Badge className="cursor-pointer" variant="destructive">Delete</Badge>
                                </TableCell> 
                            </TableRow>

                            
                            
                        </TableBody>
                        </Table>
                    </CardContent>
                    </Card>
            </div>
        </main>
   </>
  )
}

export default CompanysPage