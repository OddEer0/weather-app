import "normalize.css"
import ReactDOM from "react-dom/client"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"

import App from "./App.tsx"
import { AppProvider } from "./providers"
import "./styles/index.sass"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<AppProvider>
		<App />
	</AppProvider>
)
