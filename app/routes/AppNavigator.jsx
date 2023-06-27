import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import useAuth from "../hooks/useAuth";
import { Role } from "../constants/entity";

import screenNames from "../constants/screenNames";
import useFetchList from "../hooks/useFetchList";

//common screen
import AboutApp from "../screens/AboutAppScreen";
import DrawerContent from "../screens/DrawerContentScreen";
import PreInspectionForm from "../screens/DriverScreens/PreInspectionFormScreen";
import Profile from "../screens/ProfileScreen";
import PreInspectionHistory from "../screens/DriverScreens/PreInspectionHistoryScreen";
import PreInspectionNote from "../screens/DriverScreens/PreInspectionNoteScreen";

// driver screens
import ChatRoom from "../screens/DriverScreens/ChatRoomScreen";
import Documents from "../screens/DocumentsScreen";
import DriverJobs from "../screens/DriverScreens/DriverJobsListScreen";
import FullDktForm from "../screens/DriverScreens/FullDktFormScreen";
import FullDktList from "../screens/DriverScreens/FullDktListScreen";
import PreInspectionList from "../screens/DriverScreens/PreInspectionListScreen";
import ScanDktForm from "../screens/DriverScreens/ScanDktFormScreen";
import ScanDktList from "../screens/DriverScreens/ScanDktListScreen";
import TimeSheet from "../screens/DriverScreens/TimeSheetScreen";

//mechanic screen
import DocumentForm from "../screens/MechanicScreens/DocumentForm";
import DocumentList from "../screens/MechanicScreens/DocumentList";
import FleetInspection from "../screens/MechanicScreens/FleetInspection";
import InspectionHistory from "../screens/MechanicScreens/InspectionHistory";
import MechanicDataScreen from "../screens/MechanicScreens/MechanicDataScreen";
import MechanicTimeSheetData from "../screens/MechanicScreens/MechanicTimeSheetData";

//Admin Screen
import Chat from "../screens/AdminScreens/Chat";
import Client from "../screens/AdminScreens/Client";
import CreditNote from "../screens/AdminScreens/CreditNote";
import Currencies from "../screens/AdminScreens/Currencies";
import DashBoard from "../screens/AdminScreens/DashBoard";
import DetailsView from "../screens/DetailsViewScreen";
import Drivers from "../screens/AdminScreens/Drivers";
import Estimate from "../screens/AdminScreens/Estimate";
import EstimateCreditNoteForm from "../screens/AdminScreens/EstimateCreditNoteForm";
import Form from "../screens/FormScreen";
import FuelEfficiency from "../screens/AdminScreens/FuelEfficiency";
import FuelLog from "../screens/AdminScreens/FuelLog";
import JobColor from "../screens/AdminScreens/JobColor";
import JobEntry from "../screens/AdminScreens/JobEntry";
import Mechanic from "../screens/AdminScreens/Mechanic";
import MechanicTimesheet from "../screens/AdminScreens/MechanicTimesheet";
import Notifications from "../screens/NotificationsScreen";
import Regos from "../screens/AdminScreens/Regos";
import ReportIssue from "../screens/AdminScreens/ReportIssue";
import SMS from "../screens/AdminScreens/SMS";
import Staff from "../screens/AdminScreens/Staff";
import Tax from "../screens/AdminScreens/Tax";
import Timezones from "../screens/AdminScreens/Timezones";
import useNotificationHandler from "../hooks/useNotificationHandler";
import VehicleMaintenance from "../screens/AdminScreens/VehicleMaintenance";

//todo - scroll in side drawer
const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  const { role } = useAuth();
  useFetchList();
  useNotificationHandler();

  const drawerScreens = {
    [Role.MECHANIC]: [
      { name: screenNames.MECHANIC_DATA_SCREEN, component: MechanicDataScreen },

      {
        name: screenNames.MECHANIC_TIME_SHEET_DATA,
        component: MechanicTimeSheetData,
      },
      { name: screenNames.FLEET_INSPECTION, component: FleetInspection },
      { name: screenNames.INSPECTION_HISTORY, component: InspectionHistory },
      { name: screenNames.ADD_DOCUMENT_SCREEN, component: DocumentForm },
      { name: screenNames.VIEW_DOCUMENTS, component: DocumentList },
    ],
    [Role.DRIVER]: [
      { name: screenNames.FULL_DKT_LIST_SCREEN, component: FullDktList },
      { name: screenNames.SCAN_DKT_LIST_SCREEN, component: ScanDktList },
      { name: screenNames.FULL_DKT_FORM_SCREEN, component: FullDktForm },
      { name: screenNames.SCAN_DKT_FORM_SCREEN, component: ScanDktForm },
      {
        name: screenNames.PRE_INSPECTION_FORM_SCREEN,
        component: PreInspectionForm,
      },
      {
        name: screenNames.PRE_INSPECTION_LIST_SCREEN,
        component: PreInspectionList,
      },
      {
        name: screenNames.DRIVER_ACCEPTED_JOBS_SCREEN,
        component: DriverJobs,
      },
      {
        name: screenNames.DRIVER_PENDING_JOBS_SCREEN,
        component: DriverJobs,
      },

      { name: screenNames.DRIVER_TIME_SHEET_SCREEN, component: TimeSheet },

      // { name: screenNames.DOCUMENT_ADD_SCREEN, component: DocumentAdd },
      {
        name: screenNames.PRE_INSPECTION_HISTORY_SCREEN,
        component: PreInspectionHistory,
      },
      {
        name: screenNames.PRE_INSPECTION_NOTES_SCREEN,
        component: PreInspectionNote,
      },
    ],
    [Role.ADMIN]: [
      {
        name: screenNames.DASHBOARD,
        component: DashBoard,
      },
      {
        name: screenNames.REGOS,
        component: Regos,
      },
      {
        name: screenNames.DRIVER,
        component: Drivers,
      },
      {
        name: screenNames.MECHANIC,
        component: Mechanic,
      },
      {
        name: screenNames.VEHICLE_MAINTENANCE,
        component: VehicleMaintenance,
      },
      {
        name: screenNames.STAFF,
        component: Staff,
      },
      {
        name: screenNames.FUEL_LOG,
        component: FuelLog,
      },
      {
        name: screenNames.CHAT,
        component: Chat,
      },
      {
        name: screenNames.SMS,
        component: SMS,
      },
      {
        name: screenNames.FUEL_EFFICIENCY,
        component: FuelEfficiency,
      },
      {
        name: screenNames.JOB_ENTRY,
        component: JobEntry,
      },
      {
        name: screenNames.CLIENT,
        component: Client,
      },
      {
        name: screenNames.REPORT_ISSUE,
        component: ReportIssue,
      },
      {
        name: screenNames.MECHANIC_TIME_SHEET,
        component: MechanicTimesheet,
      },
      {
        name: screenNames.TAX,
        component: Tax,
      },
      {
        name: screenNames.JOB_COLOR,
        component: JobColor,
      },
      {
        name: screenNames.CURRENCY,
        component: Currencies,
      },
      {
        name: screenNames.TIMEZONE,
        component: Timezones,
      },
      {
        name: screenNames.ESTIMATE,
        component: Estimate,
      },
      {
        name: screenNames.CREDIT_NOTE,
        component: CreditNote,
      },
    ],
  };

  const commonScreens = [
    { name: screenNames.ABOUT_APP_SCREEN, component: AboutApp },
    { name: screenNames.PROFILE_SCREEN, component: Profile },
    { name: screenNames.FORM_SCREEN, component: Form },
    { name: screenNames.DETAILS_VIEW_SCREEN, component: DetailsView },
    { name: screenNames.DOCUMENTS_SCREEN, component: Documents },
    { name: screenNames.CHAT_ROOM_SCREEN, component: ChatRoom },
    { name: screenNames.NOTIFICATIONS_SCREEN, component: Notifications },
    {
      name: screenNames.ESTIMATE_CREDIT_NOTE_FORM,
      component: EstimateCreditNoteForm,
    },
  ];

  const navigationScreens = [...drawerScreens[role], ...commonScreens];

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: "85%",
        },
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
      useLegacyImplementation={true}
    >
      {navigationScreens.map((screen) => (
        <Drawer.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
        />
      ))}
    </Drawer.Navigator>
  );
}
