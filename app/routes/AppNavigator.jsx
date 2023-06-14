import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import DrawerContent from "../screens/DrawerContentScreen";
import screenNames from "../constants/screenNames";
import useFetchList from "../hooks/useFetchList";

//screens
import ChatRoom from "../screens/DriverScreens/ChatRoomScreen";
import Documents from "../screens/DriverScreens/DocumentsScreen";
import DriverJobs from "../screens/DriverScreens/DriverJobsScreen";
import FullDktForm from "../screens/DriverScreens/FullDktFormScreen";
import FullDktList from "../screens/DriverScreens/FullDktListScreen";
import PreInspectionList from "../screens/DriverScreens/PreInspectionListScreen";
import ScanDktForm from "../screens/DriverScreens/ScanDktFormScreen";
import ScanDktList from "../screens/DriverScreens/ScanDktListScreen";
import TimeSheet from "../screens/DriverScreens/TimeSheetScreen";

//mechanic screen
import MechanicFormScreen from "../screens/MechnicScreens/MechanicFormScreen";
import MechanicDataScreen from "../screens/MechnicScreens/MechanicDataScreen";
import MechanicTimeSheetForm from "../screens/MechnicScreens/MechanicTimeSheetForm";
import MechanicTimeSheetData from "../screens/MechnicScreens/MechanicTimeSheetData";
import FleetInspection from "../screens/MechnicScreens/FleetInspection";
import InspectionHistory from "../screens/MechnicScreens/InspectionHistory";
import DocumentForm from "../screens/MechnicScreens/DocumentForm";
import DocumentList from "../screens/MechnicScreens/DocumentList";

//common screen
import AboutApp from "../screens/AboutAppScreen";
import PreInspectionForm from "../screens/DriverScreens/PreInspectionFormScreen";
import Profile from "../screens/ProfileScreen";
import DocumentAdd from "../screens/DriverScreens/DocumentAddScreen";
import PreInspectionHistory from "../screens/DriverScreens/PreInspectionHistoryScreen";
import PreInspectionNote from "../screens/DriverScreens/PreInspectionNoteScreen";
import DriverJobsList from "../screens/DriverScreens/DriverJobsListScreen";
import useAuth from "../hooks/useAuth";
import { Role } from "../constants/entity";

//Admin Screen
import DashBoard from "../screens/AdminScreens/DashBoard";
import Regos from "../screens/AdminScreens/Regos";
import Drivers from "../screens/AdminScreens/Drivers";
import Mechanic from "../screens/AdminScreens/Mechanic";
import VehicleMaintenance from "../screens/AdminScreens/VehicleMaintenance";
import Staff from "../screens/AdminScreens/Staff";
import FuelLog from "../screens/AdminScreens/FuelLog";
import Chat from "../screens/AdminScreens/Chat";
import SMS from "../screens/AdminScreens/SMS";
import FuelEfficiency from "../screens/AdminScreens/FuelEfficiency";
import JobEntry from "../screens/AdminScreens/JobEntry";
import Client from "../screens/AdminScreens/Client";
import ReportIssue from "../screens/AdminScreens/ReportIssue";
import MechanicTimesheet from "../screens/AdminScreens/MechanicTimesheet";
import Estimate from "../screens/AdminScreens/Estimate";
import Tax from "../screens/AdminScreens/Tax";
import JobColor from "../screens/AdminScreens/JobColor";
import Currencies from "../screens/AdminScreens/Currencies";
import Timezones from "../screens/AdminScreens/Timezones";
import Form from "../screens/FormScreen";
<<<<<<< HEAD
import DetailsView from "../screens/DetailsViewScreen";
=======
>>>>>>> 9ef9d4bec9cacc2e147f88c4ad4969aa65ca6845

//todo - scroll in side drawer
const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  const { role } = useAuth();
  useFetchList();

  const drawerScreens = {
    [Role.MECHANIC]: [
      { name: screenNames.MECHANIC_FORM_SCREEN, component: MechanicFormScreen },
      { name: screenNames.MECHANIC_DATA_SCREEN, component: MechanicDataScreen },
      {
        name: screenNames.MECHANIC_TIME_SHEET_FORM,
        component: MechanicTimeSheetForm,
      },
      {
        name: screenNames.MECHANIC_TIME_SHEET_DATA,
        component: MechanicTimeSheetData,
      },
      { name: screenNames.FLEET_INSPECTION, component: FleetInspection },
      { name: screenNames.INSPECTION_HISTORY, component: InspectionHistory },
      { name: screenNames.ADD_DOCUMENT, component: DocumentForm },
      { name: screenNames.VIEW_DOCUMENTS, component: DocumentList },
      //{ name: screenNames.ADD_DOCUMENT, component: DocumentForm },
    ],
    [Role.DRIVER]: [
      { name: screenNames.FULL_DKT_FORM_SCREEN, component: FullDktForm },
      { name: screenNames.FULL_DKT_LIST_SCREEN, component: FullDktList },
      { name: screenNames.SCAN_DKT_FORM_SCREEN, component: ScanDktForm },
      { name: screenNames.SCAN_DKT_LIST_SCREEN, component: ScanDktList },
      {
        name: screenNames.PRE_INSPECTION_FORM_SCREEN,
        component: PreInspectionForm,
      },
      {
        name: screenNames.PRE_INSPECTION_LIST_SCREEN,
        component: PreInspectionList,
      },
      { name: screenNames.DRIVER_JOBS_SCREEN, component: DriverJobs },
      { name: screenNames.DRIVER_JOBS_LIST_SCREEN, component: DriverJobsList },

      { name: screenNames.DRIVER_DOCUMENTS_SCREEN, component: Documents },
      { name: screenNames.DRIVER_TIME_SHEET_SCREEN, component: TimeSheet },

      { name: screenNames.CHAT_ROOM_SCREEN, component: ChatRoom },
      { name: screenNames.DOCUMENT_ADD_SCREEN, component: DocumentAdd },
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
<<<<<<< HEAD
=======
      {
        name: screenNames.ESTIMATE,
        component: Estimate,
      },
>>>>>>> 9ef9d4bec9cacc2e147f88c4ad4969aa65ca6845
    ],
  };

  const commonScreens = [
    { name: screenNames.ABOUT_APP_SCREEN, component: AboutApp },
    { name: screenNames.PROFILE_SCREEN, component: Profile },
    { name: screenNames.FORM_SCREEN, component: Form },
    { name: screenNames.DETAILS_VIEW_SCREEN, component: DetailsView },
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
