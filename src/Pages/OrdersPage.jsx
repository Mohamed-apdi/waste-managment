import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

  import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { useState } from "react";
import { Badge } from "lucide-react";

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
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        

        {/* Orders  */}
        <div className="">
       
                <Card x-chunk="dashboard-05-chunk-3">
                  <CardHeader className="px-7">
                    <CardTitle>Orders</CardTitle>
                    <CardDescription>
                      Recent orders from your store.
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
                            Food Waste
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="outline">
                              Fulfilled
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            2023-06-23
                          </TableCell>
                          <TableCell className="text-start max-w-20">
                      {renderAdditionalNotes("Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis explicabo delectus adipisci, ipsa odit commodi dolorum, aut quos quis dolor aliquid. Nobis, at dicta.")}
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
  )
}

export default OrdersPage