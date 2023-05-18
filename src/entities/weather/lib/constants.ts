import {
	BsCloudFogFill,
	BsCloudHailFill,
	BsCloudLightningFill,
	BsCloudRainFill,
	BsCloudSnowFill,
	BsCloudSunFill,
	BsFillCloudFill,
	BsFillCloudFog2Fill,
	BsFillCloudHailFill,
	BsFillCloudsFill,
	BsFillSunFill
} from "react-icons/bs"
import { FaCloudSunRain } from "react-icons/fa"
import { MdFoggy } from "react-icons/md"
import { WiDaySnowWind } from "react-icons/wi"

export const WEATHER_ICON = {
	1000: BsFillSunFill,
	1003: BsCloudSunFill,
	1006: BsFillCloudFill,
	1009: BsFillCloudsFill,
	1030: BsCloudFogFill,
	1063: FaCloudSunRain,
	1066: WiDaySnowWind,
	1069: WiDaySnowWind,
	1072: BsCloudHailFill,
	1087: BsCloudLightningFill,
	1114: BsCloudSnowFill,
	1117: BsCloudSnowFill,
	1135: BsFillCloudFog2Fill,
	1147: MdFoggy,
	1150: BsCloudRainFill,
	1153: BsCloudRainFill,
	1168: BsFillCloudHailFill,
	1171: BsFillCloudHailFill
}
