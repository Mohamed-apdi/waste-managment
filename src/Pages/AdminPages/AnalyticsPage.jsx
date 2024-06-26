
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, CircleUser, Package2, } from "lucide-react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function AnalyticsPage() {
    const data = [
        { name: "Hodan", count: 21 },
        { name: "BarUbax", count: 33 },
        { name: "Banadir", count: 11 },
        { name: "Madiino", count: 83 },
        { name: "Karan", count: 144 },
    ];

    return (
        <>
             <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
           to={"/"}
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
            <main className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Total Companies</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>24 - 13.1% increase</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Customers</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>+250 - 47.3% increase</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Collections</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>+12 - 3% increase</p>
                        </CardContent>
                    </Card>
                </div>
                <h2 className="text-5xl text-black  text-center mb-6 scroll-m-20  font-semibold tracking-tight">Collections Analytics</h2>
                <div className="my-8 w-full h-64 md:mx-auto md:h-96">  
                    <ResponsiveContainer width="70%" height="100%">
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="count" stroke="#8884d8" activeDot={{ r: 8 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

            </main>
        </>
    );
}

export default AnalyticsPage;
