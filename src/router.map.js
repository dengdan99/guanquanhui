// import Wechat from './Wechat'
// import Yi from './yi'
// import Icon from './demos/Icon'
// import Switch from './demos/Switch'
// import Radio from './demos/Radio'
// import Input from './demos/Input'
// import Number from './demos/Number'
// import Checklist from './demos/Checklist'
// import Selector from './demos/Selector'
// import Tip from './demos/Tip'
// import XButton from './demos/X-button'
// import Textarea from './demos/Textarea'
// import Flexbox from './demos/Flexbox'
// import Tab from './demos/Tab'
// import Swiper from './demos/Swiper'
// import Sticky from './demos/Sticky'
// import Picker from './demos/Picker'
// import Datetime from './demos/Datetime'
// import Popup from './demos/Popup'
// import Range from './demos/Range'
// import Actionsheet from './demos/Actionsheet'
// import Clocker from './demos/Clocker'
// import Rater from './demos/Rater'
// import PopupPicker from './demos/Popup-picker'
// import Toast from './demos/Toast'
// import Loading from './demos/Loading'
// import Alert from './demos/Alert'
// import Confirm from './demos/Confirm'
// import Progress from './demos/Progress'
// import XImg from './demos/XImg'
// import XImgScroller from './demos/X-img-scroller'
// import Onepx from './demos/1px'
// import Orientation from './demos/Orientation'
// import Shake from './demos/Shake'
// import Cell from './demos/Cell'
// import Demo from './demos/Demo'
// // const Demo = resolve => require(['./demos/Demo'], resolve)
// import Emotion from './demos/Wechat-emotion'
// import Search from './demos/Search'
// import SearchStatic from './demos/Search-static'
// import Donate from './demos/Donate'
// import Thanks from './demos/Thanks'
// import Spinner from './demos/Spinner'
// import Calendar from './demos/Calendar'
// import Circle from './demos/Circle'
// import Countup from './demos/Countup'
// import ColorPicker from './demos/Color-picker'
// import Blur from './demos/Blur'
// import Scroller from './demos/Scroller'
// import Comment from './demos/Comment'
// import Pulldown from './demos/Pulldown'
// import Pullup from './demos/Pullup'
// import PulldownPullup from './demos/PulldownPullup'
// import Masker from './demos/Masker'
// import Countdown from './demos/Countdown'
// import XHeader from './demos/X-header'
// import Inview from './demos/Inview'
// import InlineCalendar from './demos/Inline-calendar'
// import InlineCalendarStartDate from './demos/Inline-calendar-start-date'
// import Checker from './demos/Checker'
// import ScrollerFull from './demos/Scroller-full'
// import NumberRoller from './demos/Number-roller'
// import Timeline from './demos/Timeline'
// import Step from './demos/Step'
// import Tabbar from './demos/Tabbar'
// import TabbarLink from './demos/TabbarLink'
// import Panel from './demos/Panel'
// import Reddot from './demos/Reddot'
// import ButtonTab from './demos/Button-tab'
// import ScrollerSwiper from './demos/Scroller-swiper'
// import ScrollerHeader from './demos/Scroller-header'
// import Qrcode from './demos/Qrcode'
// import Badge from './demos/Badge'
// import Close from './demos/Close'
// import Dialog from './demos/Dialog'
// import DateFormatter from './demos/Date-formatter'
// import Card from './demos/Card'
// import Previewer from './demos/Previewer'
// import IconLoading from './demos/Icon-loading'
// import Test from './demos/Test'
// import Issue189 from './demos/Issue189'
// import Issue461 from './demos/Issue461'
// import Issue414 from './demos/Issue414'
// import Divider from './demos/Divider'
// import Fullpage from './components/fullpage/DemoBasic'
// import Popover from './components/popover/DemoIndex'

// // plugins
// import DeviceDemo from './demos/Device'

// page
import notFound from './page/notFound'
import login from './page/login'
import index from './page/index/index'
import user from './page/user/index'
import userInfo from './page/user/info'
import userRank from './page/user/rank'
import userZan from './page/user/myzan'
import userMyOrder from './page/user/myorder'
import patyList from './page/pary/index'
import patyDetail from './page/pary/detail'
import baike from './page/baike/index'
import dasha from './page/dasha/index'
import comp from './page/dasha/comp'
import club from './page/dasha/club'
import gruopList from './page/group/list'
import order from './page/order/index'
import orderNew from './page/order/new'
import orderView from './page/order/view'
import applyTep from './page/apply/tep'
import applyAgree from './page/apply/agree'
import articleDetail from './page/article/detail'
import articleList from './page/article/list'
import articleZhuanti from './page/article/zhuanti'
import hudong from './page/hudong/index'
import toupiao from './page/toupiao/detail'
import toupiaoList from './page/toupiao/index'

export const map = {
  '/': {
    component: index
  },
  '/login/:uid/:token': {
    component: login
  },
  '/user/index': {
    component: user
  },
  '/user/info': {
    component: userInfo
  },
  '/user/rank': {
    component: userRank
  },
  '/user/myzan': {
    component: userZan
  },
  '/user/myorder': {
    component: userMyOrder
  },
  '/paty/index': {
    component: patyList
  },
  '/paty/detail/:id': {
    component: patyDetail
  },
  '/hudong/index': {
    component: hudong
  },
  '/baike/index': {
    component: baike
  },
  '/dasha/index': {
    component: dasha
  },
  '/dasha/comp/:id': {
    component: comp
  },
  '/dasha/club/:id': {
    component: club
  },
  '/order/index': {
    component: order
  },
  '/order/new': {
    component: orderNew
  },
  '/order/view/:id': {
    component: orderView
  },
  '/apply/tep': {
    component: applyTep
  },
  '/apply/agree': {
    component: applyAgree
  },
  '/article/detail/:id': {
    component: articleDetail
  },
  '/article/list/:id': {
    component: articleList
  },
  '/article/zhuanti/:id': {
    component: articleZhuanti
  },
  '/group/list': {
    component: gruopList
  },
  '/toupiao/detail/:id': {
    component: toupiao
  },
  '/toupiao/index': {
    component: toupiaoList
  },
  '*': {
    component: notFound
  }

  // other
  // '/demo/wechat': {
  //   component: Wechat
  // },
  // '/demo/yi': {
  //   component: Yi
  // },
  // '/component/icon': {
  //   component: Icon
  // },
  // '/component/switch': {
  //   component: Switch
  // },
  // '/component/radio': {
  //   component: Radio
  // },
  // '/component/input': {
  //   component: Input
  // },
  // '/component/number': {
  //   component: Number
  // },
  // '/component/checklist': {
  //   component: Checklist
  // },
  // '/component/selector': {
  //   component: Selector
  // },
  // '/component/tip': {
  //   component: Tip
  // },
  // '/component/x-button': {
  //   component: XButton
  // },
  // '/component/textarea': {
  //   component: Textarea
  // },
  // '/component/flexbox': {
  //   component: Flexbox
  // },
  // '/component/tab': {
  //   component: Tab
  // },
  // '/component/swiper': {
  //   component: Swiper
  // },
  // '/component/sticky': {
  //   component: Sticky
  // },
  // '/component/picker': {
  //   component: Picker
  // },
  // '/component/datetime': {
  //   component: Datetime
  // },
  // '/component/popup': {
  //   component: Popup
  // },
  // '/component/range': {
  //   component: Range
  // },
  // '/component/actionsheet': {
  //   component: Actionsheet
  // },
  // '/component/clocker': {
  //   component: Clocker
  // },
  // '/component/rater': {
  //   component: Rater
  // },
  // '/component/popup-picker': {
  //   component: PopupPicker
  // },
  // '/component/address': {
  //   component: function (resolve) {
  //     require(['./demos/Address'], resolve)
  //   }
  // },
  // '/component/toast': {
  //   component: Toast
  // },
  // '/component/loading': {
  //   component: Loading
  // },
  // '/component/alert': {
  //   component: Alert
  // },
  // '/component/confirm': {
  //   component: Confirm
  // },
  // '/component/progress': {
  //   component: Progress
  // },
  // '/component/x-img': {
  //   component: XImg
  // },
  // '/component/x-img-scroller': {
  //   component: XImgScroller
  // },
  // '/component/1px': {
  //   component: Onepx
  // },
  // '/component/orientation': {
  //   component: Orientation
  // },
  // '/component/shake': {
  //   component: Shake
  // },
  // '/component/cell': {
  //   component: Cell
  // },
  // '/demo': {
  //   component: Demo
  // },
  // '/component/emotion': {
  //   component: Emotion
  // },
  // '/component/search': {
  //   component: Search
  // },
  // '/component/search-static': {
  //   component: SearchStatic
  // },
  // '/project/donate': {
  //   component: Donate
  // },
  // '/project/thanks': {
  //   component: Thanks
  // },
  // '/component/spinner': {
  //   component: Spinner
  // },
  // '/component/calendar': {
  //   component: Calendar
  // },
  // '/component/circle': {
  //   component: Circle
  // },
  // '/component/countup': {
  //   component: Countup
  // },
  // '/component/color-picker': {
  //   component: ColorPicker
  // },
  // '/component/blur': {
  //   component: Blur
  // },
  // '/component/scroller': {
  //   component: Scroller
  // },
  // '/component/comment': {
  //   component: Comment
  // },
  // '/component/pulldown': {
  //   component: Pulldown
  // },
  // '/component/pullup': {
  //   component: Pullup
  // },
  // '/component/pulldown-pullup': {
  //   component: PulldownPullup
  // },
  // '/component/masker': {
  //   component: Masker
  // },
  // '/component/countdown': {
  //   component: Countdown
  // },
  // '/component/inview': {
  //   component: Inview
  // },
  // '/component/x-header': {
  //   component: XHeader
  // },
  // '/component/inline-calendar': {
  //   component: InlineCalendar
  // },
  // '/component/inline-calendar-start-date': {
  //   component: InlineCalendarStartDate
  // },
  // '/component/checker': {
  //   component: Checker
  // },
  // '/component/scroller/full': {
  //   component: ScrollerFull
  // },
  // '/component/scroller/header': {
  //   component: ScrollerHeader
  // },
  // '/component/number-roller': {
  //   component: NumberRoller
  // },
  // '/component/timeline': {
  //   component: Timeline
  // },
  // '/component/step': {
  //   component: Step
  // },
  // '/component/tabbar': {
  //   component: Tabbar
  // },
  // '/component/tabbar-link': {
  //   component: TabbarLink
  // },
  // '/component/panel': {
  //   component: Panel
  // },
  // '/component/reddot': {
  //   component: Reddot
  // },
  // '/component/button-tab': {
  //   component: ButtonTab
  // },
  // '/component/scroller-swiper': {
  //   component: ScrollerSwiper
  // },
  // '/component/qrcode': {
  //   component: Qrcode
  // },
  // '/component/badge': {
  //   component: Badge
  // },
  // '/component/close': {
  //   component: Close
  // },
  // '/component/dialog': {
  //   component: Dialog
  // },
  // '/component/date-formatter': {
  //   component: DateFormatter
  // },
  // '/component/card': {
  //   component: Card
  // },
  // '/component/previewer': {
  //   component: Previewer
  // },
  // '/component/icon-loading': {
  //   component: IconLoading
  // },
  // '/plugin/device': {
  //   component: DeviceDemo
  // },
  // '/test': {
  //   component: Test
  // },
  // '/issue/189': {
  //   component: Issue189
  // },
  // '/issue/461': {
  //   component: Issue461
  // },
  // '/issue/414': {
  //   component: Issue414
  // },
  // '/component/divider': {
  //   component: Divider
  // },
  // '/component/fullpage': {
  //   component: Fullpage
  // },
  // '/component/popover': {
  //   component: Popover
  // },
  // '/component/center': {
  //   component: function (resolve) {
  //     require(['./demos/Center'], resolve)
  //   }
  // }
}
