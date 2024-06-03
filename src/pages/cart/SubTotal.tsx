const SubTotal = () => {
    return (
        <dl className="space-y-0.5 text-sm text-gray-700">
            <div className="flex justify-between">
                <dt>Subtotal</dt>
                <dd>£250</dd>
            </div>

            <div className="flex justify-between">
                <dt>VAT</dt>
                <dd>£25</dd>
            </div>

            <div className="flex justify-between">
                <dt>Discount</dt>
                <dd>-£20</dd>
            </div>

            <div className="flex justify-between !text-base font-medium">
                <dt>Total</dt>
                <dd>£200</dd>
            </div>
        </dl>
    )
}
export default SubTotal;