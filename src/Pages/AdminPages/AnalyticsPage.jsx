
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
import { Menu, CircleUser, } from "lucide-react";
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
            <header className="sticky top-0 z-10 flex items-center justify-between bg-white px-4 py-2 shadow">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button className="md:hidden">
                            <Menu className="h-6 w-6 text-gray-800" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <nav className="p-4">
                            <Link to="/dashboard" className="block p-2">Dashboard</Link>
                            <Link to="/orders" className="block p-2">Orders</Link>
                            <Link to="/companys" className="block p-2">Companys</Link>
                            <Link to="/customers" className="block p-2">Customers</Link>
                            <Link to="/analytics" className="block p-2">Analytics</Link>
                        </nav>
                    </SheetContent>
                </Sheet>
                <div className="hidden md:flex space-x-4">
                    <Link to="/dashboard" className="text-gray-600 hover:text-gray-800">Dashboard</Link>
                    <Link to="/orders" className="text-gray-600 hover:text-gray-800">Orders</Link>
                    <Link to="/companys" className="text-gray-600 hover:text-gray-800">Companys</Link>
                    <Link to="/customers" className="text-gray-600 hover:text-gray-800">Customers</Link>
                    <Link to="/analytics" className="text-gray-600 hover:text-gray-800">Analytics</Link>
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button className="rounded-full">
                            <CircleUser className="h-5 w-5" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Select</DropdownMenuItem>
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                        <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
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
                <h2 className="text-5xl text-black  text-center mb-6 scroll-m-20  font-semibold tracking-tight">Our Innovative Feature</h2>
                <div className="my-8 w-full h-64 md:h-96">  
                    <ResponsiveContainer width="100%" height="100%">
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
