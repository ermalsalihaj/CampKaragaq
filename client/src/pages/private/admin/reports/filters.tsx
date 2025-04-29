import { Button, Form, Input, Select } from "antd"

function AdminReportsFilters({
    filters,
    setFilters,
    events = [],
    onFilter,
}: {
    filters: any,
    setFilters: any,
    events?: any[]
    onFilter?: any
}
) {

    let disableFilterBtn = false;

    if (filters.startDate && !filters.endDate) {
        disableFilterBtn = true;
    }

    if (!filters.startDate && filters.endDate) {
        disableFilterBtn = true;
    }
    return (
        <Form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-end"
            layout="vertical"
        >
            <Form.Item label='Eventi'>
                <Select
                    value={filters.eventId}
                    onChange={(value) => setFilters({ ...filters, eventId: value })}
                >
                    <Select.Option value=''>All</Select.Option>
                    {events.map((event: any) => (
                        <Select.Option key={event._id} value={event.id}>
                            {event.name}
                        </Select.Option>
                    ))}
                </Select>
            </Form.Item>

            <Form.Item label='Data e Fillimit'>
                <Input type="date"
                    value={filters.startDate}
                    onChange={(e) =>
                        setFilters({ ...filters, startDate: e.target.value })
                    } />
            </Form.Item>

            <Form.Item label='Data e Mbarimit'>
                <Input type="date"
                    value={filters.endDate}
                    onChange={(e) =>
                        setFilters({ ...filters, endDate: e.target.value })
                    } />
            </Form.Item>

            <div className="flex gap-5">
                <Button>Fshij Filterat</Button>
                <Button
                    type="primary"
                    disabled={disableFilterBtn}
                    onClick={onFilter}
                >Shfaq Raportet</Button>
            </div>
        </Form>
    )
}

export default AdminReportsFilters
