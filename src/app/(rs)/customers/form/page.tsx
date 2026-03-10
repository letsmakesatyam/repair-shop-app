import { getCustomer } from "@/lib/queries/getCustomer";
import { BackButton } from "@/components/BackButton";

export default async function CustomerFormPage(
    {
        searchParams
    }: {
        searchParams: Promise<{ [id: string]: string | undefined }>
    }
) {
    try {
        const { customerId } = await searchParams;
        if (customerId) {
            const customer = await getCustomer(Number(customerId));
            console.log(customer);
            return (
                <div>
                    <h1>Edit Customer</h1>
                    <p>{customer.firstName + " " + customer.lastName}</p>
                </div>
            );
        }
        if (customerId === undefined) {
            return (
                <div>
                    <h2>Customer Not Found</h2>
                    <BackButton title="Back to Customers" />
                </div>
            );
        }
        return (
            <div>
                <h1>Error</h1>
            </div>
        );
    } catch (error) {
        console.error(error);
        return (
            <div>
                <h1>Error</h1>
            </div>
        );
    }
}