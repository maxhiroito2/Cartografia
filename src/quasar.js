import Vue from 'vue';

import './styles/quasar.scss';
import '@quasar/extras/roboto-font/roboto-font.css';
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css';
import '@quasar/extras/material-icons/material-icons.css';
// import iconSet from 'quasar/icon-set/material-icons';
import {
  ClosePopup,
  QAvatar,
  QBadge,
  QBtn,
  QBtnToggle,
  QCard,
  QCardActions,
  QCardSection,
  QCarousel,
  QCarouselControl,
  QCarouselSlide,
  QCheckbox,
  QChip,
  QDate,
  QDialog,
  QDrawer,
  QEditor,
  QExpansionItem,
  QHeader,
  QIcon,
  QImg,
  QInput,
  QItem,
  QItemLabel,
  QItemSection,
  QLayout,
  QList,
  QOptionGroup,
  QPage,
  QPageContainer,
  QParallax,
  QRadio,
  QRouteTab,
  QScrollArea,
  QSelect,
  QSeparator,
  QSlideItem,
  QSlideTransition,
  QSpace,
  QSplitter,
  QStep,
  QStepper,
  QStepperNavigation,
  QTab,
  QTable,
  QTabs,
  QTimeline,
  QTimelineEntry,
  QToggle,
  QToolbar,
  QToolbarTitle,
  QTooltip,
  Quasar,
  QUploader,
  QFile,
  Intersection,
} from 'quasar';

Vue.use(Quasar, {
  // iconSet: { iconSet },
  config: {
    extras: [
      'material-icons',
      'fontawesome-v5',
    ],
    brand: {
      // definir aqui suas cores padroes
      primary: '#050302',
      secondary: '#00ff00',
      // accent: '',
      // dark: '',
      // positive: '',
      // negative: '',
      // info: '',
      // warning: '',
    },
    directives: {
      Intersection,
    },
  },
  components: {
    ClosePopup,
    QAvatar,
    QBadge,
    QBtn,
    QBtnToggle,
    QCard,
    QCardActions,
    QCardSection,
    QCarousel,
    QCarouselControl,
    QCarouselSlide,
    QCheckbox,
    QChip,
    QDate,
    QDialog,
    QDrawer,
    QEditor,
    QExpansionItem,
    QHeader,
    QIcon,
    QImg,
    QInput,
    QItem,
    QItemLabel,
    QItemSection,
    QLayout,
    QList,
    QOptionGroup,
    QPage,
    QPageContainer,
    QParallax,
    QRadio,
    QRouteTab,
    QScrollArea,
    QSelect,
    QSeparator,
    QSlideItem,
    QSlideTransition,
    QSpace,
    QSplitter,
    QStep,
    QStepper,
    QStepperNavigation,
    QTab,
    QTable,
    QTabs,
    QTimeline,
    QTimelineEntry,
    QToggle,
    QToolbar,
    QToolbarTitle,
    QTooltip,
    Quasar,
    QUploader,
    QFile,
  },
  plugins: {},
});
