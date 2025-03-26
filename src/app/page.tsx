import Infocard from "@/components/infocard/Infocard";
import ProtectedRoute from "@/components/protectedRoute/ProtectedRouter";
import Image from "next/image";


export default function Homepage() {

    return(
        <ProtectedRoute>
        <Infocard />
        </ProtectedRoute>
    );

}