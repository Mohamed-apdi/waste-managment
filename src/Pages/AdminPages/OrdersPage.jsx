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
import { useState } from "react";
import { Badge } from "lucide-react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  CircleUser,
  Menu,
  Package2,
} from "lucide-react"
import { Button } from "@/components/ui/button";


function OrdersPage() {
    const [showFullText, setShowFullText] = useState(false);

    const toggleFullText = () => {
      setShowFullText(!showFullText);
    };
  
    const renderAdditionalNotes = (text) => {
      if (showFullText) {
        return text;
      }
      return `${text.substring(0, 50)}...`; // Truncate text
    };
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
        

        {/* Orders  */}
        <div className="">
       
                <Card x-chunk="dashboard-05-chunk-3">
                  <CardHeader className="px-7">
                    <CardTitle>Orders</CardTitle>
                    <CardDescription>
                      orders from your Own.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Customer</TableHead>
                          <TableHead className="hidden sm:table-cell">
                            Type
                          </TableHead>
                          <TableHead className="hidden sm:table-cell">
                            Status
                          </TableHead>
                          <TableHead className="hidden md:table-cell">
                            Date
                          </TableHead>
                          <TableHead className="text-right">additional_notes</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow className="bg-accent">
                          <TableCell>
                            <div className="font-medium">Maxamed</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              moha@example.com
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            Food
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="outline">
                              Now
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            2024-04-14
                          </TableCell>
                          <TableCell className="text-start max-w-20">
                            {renderAdditionalNotes(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis explicabo delectus adipisci, ipsa odit commodi dolorum, aut quos quis dolor aliquid. Nobis, at dicta.`)}
                            <button onClick={toggleFullText} className="ml-2 text-xs text-blue-500 hover:text-blue-700">
                              {showFullText ? 'Show Less' : 'Show All'}
                            </button>
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

export default OrdersPage