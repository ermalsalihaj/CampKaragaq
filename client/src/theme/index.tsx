import { ConfigProvider } from "antd"

function ThemeProvider({ children }: {
    children: React.ReactNode
}) {
    return (
        <ConfigProvider theme={{
            token: {
                colorPrimary: '#007c3d',
                borderRadius: 2
            },
            components: {
                Button: {
                    controlHeight: 45,
                    controlOutline: 'none',
                },
                Input: {
                    controlHeight: 45,
                    controlOutline: 'none',
                },
                Select: {
                    controlHeight: 45,
                    controlOutline: 'none',
                }
            }
        }}>
            {children}
        </ConfigProvider>
    )
}

export default ThemeProvider
