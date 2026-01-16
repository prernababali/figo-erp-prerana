# FigoERP Dashboard Structure

**Version:** 1.0  
**Last Updated:** January 2026

---

## Dashboard Layout Overview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          FIGO ERP DASHBOARD                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│ ┌──────────────────┐                                                         │
│ │    LEFT SIDEBAR  │  ┌──────────────────────────────────────────────────┐  │
│ │                  │  │         DASHBOARD HEADER                        │  │
│ │  • Dashboard     │  │  Welcome back, HR!                              │  │
│ │  • Employee Hub  │  │  Today is Monday, September 13, 2023            │  │
│ │  • Attendance    │  └──────────────────────────────────────────────────┘  │
│ │  • Leave         │                                                         │
│ │  • Payroll       │  ┌──────────────────────────────────────────────────┐  │
│ │  • Compliance    │  │    KEY METRICS ROW (4 Cards)                    │  │
│ │  • Training &    │  │                                                  │  │
│ │    Performance   │  │ ┌──────────┐ ┌──────────┐ ┌──────────┐┌───────┐│  │
│ │  • Recruitment   │  │ │ Total    │ │Attendance│ │ Active   ││Policy ││  │
│ │  • Exit Mgmt     │  │ │Employees │ │  Today   │ │Leaves    ││Updates││  │
│ │                  │  │ │  1,250   │ │  98.2%   │ │   12     ││99.8%  ││  │
│ │                  │  │ └──────────┘ └──────────┘ └──────────┘└───────┘│  │
│ │                  │  │                                                  │  │
│ │                  │  └──────────────────────────────────────────────────┘  │
│ └──────────────────┘                                                         │
│                                                                              │
│  ┌─────────────────────────────────────────┐  ┌──────────────────────────┐ │
│  │   ATTENDANCE OVERVIEW                   │  │   LEAVE MANAGEMENT       │ │
│  │   (Chart - Last 6 Months)               │  │   SUMMARY                │ │
│  │                                          │  │                          │ │
│  │   ▁▂▃▃▂▃ (Line Graph)                   │  │  Total Request: 15       │ │
│  │   On-Time                               │  │  Approved: 10            │ │
│  │   Late Arrival                          │  │  Pending: 5              │ │
│  │   Absent                                │  │  Rejected: 15            │ │
│  │                                          │  │  Approval Rate: 87%      │ │
│  └─────────────────────────────────────────┘  │                          │ │
│                                                │  Upcoming Leaves:        │ │
│  ┌─────────────────────────────────────────┐  │  • 17-Oct: Rajesh (Sick)│ │
│  │  UPCOMING INTERVIEWS                    │  │  • 22-Oct: Priya (Annual)
│  │                                          │  │                          │ │
│  │  Candidates & Date          Scheduled  │  │  [View Leaves Mgmt]      │ │
│  │  • Nisha S    | 29 Oct  √              │  └──────────────────────────┘ │
│  │  • Nisha S    | 29 Oct  √              │                                │
│  │  • Nisha S    | 29 Oct  √              │  ┌──────────────────────────┐ │
│  │                                          │  │   QUICK ACTIONS          │ │
│  │  [View More]                            │  │  ┌────────────────────┐ │ │
│  │                                          │  │  │ + New Employee     │ │ │
│  └─────────────────────────────────────────┘  │  │ ✓ Approve Leave Req│ │ │
│                                                │  │ + Schedule Interv. │ │ │
│  ┌─────────────────────────────────────────┐  │  │ + Add Training Ses.│ │ │
│  │  ONBOARDING SUMMARY                    │  │  └────────────────────┘ │ │
│  │                                          │  └──────────────────────────┘ │
│  │  New Hires in Program:  12              │                                │
│  │  Pending:                 5             │  ┌──────────────────────────┐ │
│  │  Completed:               8             │  │   HR CALENDAR            │ │
│  │                                          │  │                          │ │
│  │  Pending Steps: 3 days                  │  │  • Scheduled Interviews  │ │
│  │  Completion Progress: 67%               │  │  • Training Sessions     │ │
│  │  ███████░ (Progress Bar)                │  │  • Employee Evaluations │ │
│  │                                          │  │                          │ │
│  │  [View More]                            │  └──────────────────────────┘ │
│  └─────────────────────────────────────────┘                                │
│                                                                              │
│  ┌─────────────────────────────────────────┐  ┌──────────────────────────┐ │
│  │  TRAINING SUMMARY                      │  │  COMPLIANCE ALERTS       │ │
│  │                                          │  │                          │ │
│  │  Ongoing Programs: 5                    │  │  ⚠ Overdue Training     │ │
│  │  Employees Enrolled: 78                 │  │    HR Must Review Urgent│ │
│  │  Overall Completion Rate: 84%           │  │                          │ │
│  │  ███████░ (Progress Bar)                │  │  ℹ Certification Training
│  │                                          │  │    Expires This Month   │ │
│  └─────────────────────────────────────────┘  └──────────────────────────┘ │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │  TODAY'S ATTENDANCE SNAPSHOT (Table)                                 │  │
│  │  ─────────────────────────────────────────────────────────────────  │  │
│  │  Employee    | Dept    | Shift  | Status  | Check-in | Check-out  │  │
│  │  ─────────────────────────────────────────────────────────────────  │  │
│  │  Bhavana X   | Prodn   | Day    | Present | 09:10 AM | --:-- --  │  │
│  │  Arup J      | QC      | Day    | Present | 09:10 AM | --:-- --  │  │
│  │  Arup J      | Procrmt | General| Absent  | 09:10 AM | --:-- --  │  │
│  │                                                                      │  │
│  │  Summary:  Present: 165 | Absent: 10 | Late: 7 | On-leave: 4     │  │
│  │                                                                      │  │
│  │                    [View Full Attendance]                           │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │  UPCOMING EVENTS                                                     │  │
│  │  ─────────────────────────────────────────────────────────────────  │  │
│  │  📅 David Smith's Birthday          Tomorrow                         │  │
│  │  📅 Kevin's 5th Anniversary         Sep 17                           │  │
│  │  📅 Safety Training                 Sep 27                           │  │
│  │                                                                      │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Component Breakdown

### 1. **Header Section**
- **Welcome Message**: "Welcome back, HR!"
- **Current Date/Time**: Dynamic display of current date and time
- **Location**: Top right corner
- **Current Time Display**: Shows current time (15 Sep 2025, 12:10pm)

---

### 2. **Key Metrics Row** (Top 4 Cards)

| Card | Metric | Value | Subtext |
|------|--------|-------|---------|
| 1 | Total Employees | 1,250 | +12 This Month |
| 2 | Attendance Today | 98.2% | Last Updated: [Time] |
| 3 | Active Leave Requests | 12 | Pending Approval |
| 4 | Policy Updates (This Month) | 99.8% | Compliance Rate |

---

### 3. **Main Content Grid** (Left Column)

#### a) **Attendance Overview**
- **Type**: Line Chart
- **Time Period**: Last 6 Months (May - Oct)
- **Lines Tracked**:
  - On-Time (Green)
  - Late Arrivals (Orange)
  - Absent (Red)
- **Filter**: "Last 6 Months" dropdown

#### b) **Upcoming Interviews**
- **Title**: Upcoming Interviews
- **Fields**: Candidate Name | Date | Status
- **Data**: List of scheduled interviews
- **Action**: "View More" button

#### c) **Onboarding Summary**
- **New Hires in Program**: 12
- **Status Breakdown**:
  - Pending: 5
  - Completed: 8
- **Progress Bar**: Visual completion indicator (67%)
- **Pending Steps**: 3 days
- **Action**: "View More" button

#### d) **Training Summary**
- **Ongoing Programs**: 5
- **Employees Enrolled**: 78
- **Overall Completion Rate**: 84%
- **Progress Bar**: Visual representation
- **Action**: "View More" button

#### e) **Today's Attendance Snapshot**
- **Type**: Data Table
- **Columns**: Employee | Dept | Shift | Status | Check-in | Check-out
- **Summary Row**: Present: 165 | Absent: 10 | Late: 7 | On-leave: 4
- **Action**: "View Full Attendance" button

---

### 4. **Main Content Grid** (Right Column)

#### a) **Leave Management Summary**
- **Total Requests**: 15
- **Approved**: 10
- **Pending**: 5
- **Rejected**: 15
- **Approval Rate**: 87% (with progress bar)
- **Upcoming Leaves Section**:
  - Date range format (e.g., "17-Oct")
  - Employee name
  - Leave type (Sick, Annual, etc.)
- **Action**: "View Leaves Mgmt" button

#### b) **Quick Actions**
- **Type**: Button Menu (Vertical Stack)
- **Actions Available**:
  - ➕ New Employee
  - ✓ Approve Leave Request
  - ➕ Schedule Interview
  - ➕ Add Training Session
- **Style**: Green buttons with icons

#### c) **HR Calendar**
- **Sections**:
  - Scheduled Interviews
  - Training Sessions
  - Employee Evaluations
- **Display**: List view with dates

#### d) **Compliance Alerts**
- **Alert Type**: Warning/Info messages
- **Example Alerts**:
  - ⚠️ Overdue Training (HR must review urgent matters)
  - ℹ️ Certification Training (Expires this month)
- **Style**: Color-coded (Orange for warnings, Blue for info)

#### e) **Upcoming Events**
- **Type**: Event List
- **Fields**: Icon | Event Name | Date
- **Examples**:
  - 📅 David Smith's Birthday (Tomorrow)
  - 📅 Kevin's 5th Anniversary (Sep 17)
  - 📅 Safety Training (Sep 27)

---

## Responsive Design Notes

```
┌─ DESKTOP VIEW (> 1024px)
│  ├─ Sidebar: Fixed Left
│  ├─ Main Content: 2-Column Grid
│  │  ├─ Left: 65% - Charts & Tables
│  │  └─ Right: 35% - Summaries & Alerts
│  └─ Full Width: Attendance Snapshot & Events
│
├─ TABLET VIEW (768px - 1024px)
│  ├─ Sidebar: Collapsible
│  ├─ Main Content: Stacked/Single Column
│  └─ Cards: Full Width
│
└─ MOBILE VIEW (< 768px)
   ├─ Sidebar: Hidden Menu
   ├─ Main Content: Single Column
   ├─ Cards: Scrollable
   └─ Charts: Optimized for small screens
```

---

## Color Scheme

| Element | Color | Usage |
|---------|-------|-------|
| Primary Button | Dark Green | Action buttons, CTAs |
| Present Status | Green | Attendance present |
| Absent Status | Red | Attendance absent |
| Pending Status | Orange | Warnings, pending items |
| On-Time Line | Green | Chart lines |
| Late Arrivals Line | Orange | Chart lines |
| Absent Line | Red | Chart lines |
| Background | Light Gray/White | Clean interface |
| Text Primary | Dark Gray | Main text |
| Text Secondary | Medium Gray | Subtext |

---

## Data Flow

```
User Login
    ↓
Dashboard Load
    ↓
┌─────────────────────────────────────────┐
│  Parallel API Calls:                    │
│  1. Get Employee Stats                  │
│  2. Get Attendance Overview              │
│  3. Get Leave Management Data            │
│  4. Get Onboarding Stats                 │
│  5. Get Training Data                    │
│  6. Get Interview Schedule               │
│  7. Get Compliance Alerts                │
│  8. Get Calendar Events                  │
│  9. Get Attendance Snapshot              │
└─────────────────────────────────────────┘
    ↓
Dashboard Render
    ↓
Real-time Updates (Attendance, Leaves)
```

---

## Key Features

✅ **Real-Time Data**: Attendance updates in real-time  
✅ **Interactive Charts**: Line charts for attendance trends  
✅ **Quick Actions**: One-click buttons for common tasks  
✅ **Alerts System**: Compliance and urgent notifications  
✅ **Data Aggregation**: Summary view of all HR metrics  
✅ **Table Views**: Detailed employee/attendance records  
✅ **Responsive Design**: Works on desktop, tablet, mobile  
✅ **Calendar Integration**: Events and important dates  

---

## API Endpoints Used

```
GET /api/hr/dashboard/summary              → Key Metrics
GET /api/hr/dashboard/attendance/overview  → Attendance Chart
GET /api/hr/dashboard/attendance/today     → Today's Stats
GET /api/hr/dashboard/attendance/details   → Attendance Table
GET /api/hr/dashboard/leaves               → Leave Management
GET /api/hr/dashboard/onboarding           → Onboarding Summary
GET /api/hr/dashboard/training             → Training Summary
GET /api/hr/dashboard/compliance           → Compliance Alerts
GET /api/hr/dashboard/events               → Upcoming Events
```

---

## Future Enhancements

- 📊 Customizable dashboard widgets
- 📈 Advanced analytics and reporting
- 🔔 Push notifications for alerts
- 📱 Mobile app version
- 🎯 KPI tracking and goals
- 📅 Calendar integration with external systems
- 🔐 Role-based widget visibility

---

**Dashboard Version**: 1.0  
**Last Updated**: January 2026  
**Status**: Active & Production Ready
