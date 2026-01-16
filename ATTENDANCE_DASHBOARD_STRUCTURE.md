# FigoERP Attendance & Shifts Dashboard Structure

**Version:** 1.0  
**Last Updated:** January 2026

---

## Attendance & Shifts Dashboard Layout Overview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                   FIGO ERP - ATTENDANCE & SHIFTS DASHBOARD                  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  Attendance & Shifts                                  Current time          │
│  Today is Thursday, October 16, 2025                  16 Oct 2025, 11:04am  │
│                                                                              │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐       │
│  │ Total        │ │ Total        │ │ On Leave     │ │ Remote/Field │       │
│  │ Present      │ │ Absent       │ │              │ │              │       │
│  │              │ │              │ │              │ │              │       │
│  │    250       │ │     15       │ │      30      │ │      20      │       │
│  └──────────────┘ └──────────────┘ └──────────────┘ └──────────────┘       │
│                                                                              │
│  ┌──────────────┐                                                           │
│  │ Late         │                                                           │
│  │ Arrivals     │                                                           │
│  │              │                                                           │
│  │     10       │                                                           │
│  └──────────────┘                                                           │
│                                                                              │
│  ┌─────────────────────────────────────────────┐ ┌──────────────────────┐  │
│  │ ATTENDANCE BY DEPARTMENT                    │ │ STATUS BREAKDOWN     │  │
│  │ (Grouped Bar Chart)                         │ │ (Donut Chart)        │  │
│  │                                              │ │                      │  │
│  │ 100 ┌─────────────────────────────────────┐ │ │    ◐◑◒ ← Donut     │  │
│  │ 80  │ ▓▓▓▓ ▓▓▓▓ ▓▓▓▓ ▓▓▓▓ ▓▓▓▓            │ │ │       325          │  │
│  │ 60  │ ▒▒▒▒ ▒▒▒▒ ▒▒▒▒ ▒▒▒▒ ▒▒▒▒            │ │ │                    │  │
│  │ 40  │ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░            │ │ │ ● Present          │  │
│  │ 20  │ ░░░░ ░░░░ ░░░░ ░░░░ ░░░░            │ │ │ ● Absent           │  │
│  │ 0   └─────────────────────────────────────┘ │ │ ● On Leave         │  │
│  │      HR    Finance   IT    Marketing  Ops   │ │ ● Remote/Field     │  │
│  │                                              │ │ ● Late Arrival     │  │
│  │      ▓ Total Employees                      │ │                      │  │
│  │      ▒ Present                              │ │                      │  │
│  │      ░ Absent                               │ │                      │  │
│  │        On Leave                             │ │                      │  │
│  │                                              │ │                      │  │
│  └─────────────────────────────────────────────┘ └──────────────────────┘  │
│                                                                              │
│  Total Overtime Hours This Month: 47hrs          Top Department:            │
│                                                   Production (15hrs)         │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │ RECENT ATTENDANCE                                                    │  │
│  │ ─────────────────────────────────────────────────────────────────   │  │
│  │ Employee        │ Department  │ Shift    │ In Time  │ Out Time │ St.│  │
│  │ ─────────────────────────────────────────────────────────────────   │  │
│  │ John Perera     │ Finance     │ Morning  │ 08:15 AM │ 05:03 PM │ ✓P│  │
│  │ Hamid Fernando  │ Production  │ Morning  │ 06:35 AM │ 05:00 PM │ ⚠L│  │
│  │ Priyanthi Silva │ IT          │ Night    │ 10:10 PM │ 06:05 AM │ ✓P│  │
│  │ Dolari Jayasprta│ HR          │ Day      │ 08:30 AM │ 05:00 PM │ ✓P│  │
│  │                                                                      │  │
│  │ [Edit Icon] [More Options Icon]         ◄ 1 2 ... 5 ►              │  │
│  │                                                                      │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Component Breakdown

### 1. **Header Section**
- **Page Title**: "Attendance & Shifts"
- **Current Date/Time**: Dynamic display showing date and time
- **Format**: "Today is Thursday, October 16, 2025" and "16 Oct 2025, 11:04am"
- **Location**: Top left for title, top right for current time

---

### 2. **Key Metrics Cards Row** (5 Cards)

| Card # | Metric | Value | Icon/Color | Description |
|--------|--------|-------|-----------|-------------|
| 1 | Total Present | 250 | Green | Employees present today |
| 2 | Total Absent | 15 | Red | Employees absent today |
| 3 | On Leave | 30 | Orange | Employees on approved leave |
| 4 | Remote/Field | 20 | Blue | Employees working remotely or in field |
| 5 | Late Arrivals | 10 | Yellow/Orange | Employees who arrived late |

**Layout**: 
- First 4 cards in one row
- 5th card on second row (or flexible grid)
- Each card displays metric name and numeric value

---

### 3. **Main Content Grid** (Left & Right Columns)

#### a) **Attendance by Department** (Grouped Bar Chart)
- **Type**: Multi-series grouped bar chart
- **Y-Axis**: Count (0-100)
- **X-Axis**: Departments (HR, Finance, IT, Marketing, Operations)
- **Series** (Color-coded):
  - ▓ (Dark Green) = Total Employees
  - ▒ (Medium Green) = Present
  - ░ (Light Gray) = Absent
  - Additional series for On Leave (optional)

**Data Points** (Approximate):
```
HR Resources:
  Total: 45 | Present: 42 | Absent: 2 | On Leave: 1

Finance:
  Total: 38 | Present: 36 | Absent: 1 | On Leave: 1

IT:
  Total: 52 | Present: 50 | Absent: 1 | On Leave: 1

Marketing:
  Total: 35 | Present: 33 | Absent: 1 | On Leave: 1

Operations:
  Total: 48 | Present: 45 | Absent: 2 | On Leave: 1
```

**Legend**: 
- Color key shown below or beside chart
- Total Employees, Present, Absent categories

---

#### b) **Status Breakdown** (Donut/Ring Chart)
- **Type**: Donut Chart
- **Center Value**: 325 (Total count)
- **Legend** (Right side):
  - ● Present (Dark Green)
  - ● Absent (Red)
  - ● On Leave (Orange)
  - ● Remote/Field (Blue)
  - ● Late Arrival (Yellow)

**Color Mapping**:
```
Dark Green (#2D8659)  - Present
Red (#E74C3C)         - Absent
Orange (#F39C12)      - On Leave
Blue (#3498DB)        - Remote/Field
Yellow (#F1C40F)      - Late Arrival
```

---

#### c) **Overtime Information**
- **Label**: "Total Overtime Hours This Month:"
- **Value**: 47hrs
- **Display**: Text and number (left side)

- **Label**: "Top Department:"
- **Value**: Production (15hrs)
- **Display**: Text with department name and hours (right side)

---

### 4. **Recent Attendance Table**

#### Table Structure

| Column | Data Type | Example | Notes |
|--------|-----------|---------|-------|
| Employee | Text | John Perera | Employee name |
| Department | Text | Finance | Department name |
| Shift | Text | Morning/Night/Day | Work shift type |
| In Time | Time | 08:15 AM | Check-in time |
| Out Time | Time | 05:03 PM | Check-out time |
| Status | Badge | Present (✓) / Late (⚠) | Visual status indicator |

#### Sample Data Rows

```
1. John Perera      | Finance     | Morning | 08:15 AM | 05:03 PM | ✓ Present (Green)
2. Hamid Fernando   | Production  | Morning | 06:35 AM | 05:00 PM | ⚠ Late (Orange)
3. Priyanthi Silva  | IT          | Night   | 10:10 PM | 06:05 AM | ✓ Present (Green)
4. Dolari Jayasprta | HR          | Day     | 08:30 AM | 05:00 PM | ✓ Present (Green)
```

#### Row Actions
- **Edit Icon** (Pencil): Edit attendance record
- **More Options Icon** (Three dots): Additional actions menu

#### Pagination
- **Display**: "◄ 1 2 ... 5 ►"
- **Location**: Bottom right of table
- **Current Page**: Highlighted (e.g., page 1)
- **Navigation**: Previous/Next buttons and page numbers

---

## Layout Grid Structure

```
┌──────────────────────────────────────────────────────────┐
│              Header (Title + Current Time)               │
├──────────────────────────────────────────────────────────┤
│    Key Metrics Cards (5 items: 4 + 1 or 5 per row)       │
├──────────────┬──────────────────────────────────────────┤
│              │                                           │
│  Attendance  │     Status Breakdown                      │
│  by Dept     │     (Donut Chart)                         │
│  (Bar Chart) │                                           │
│              │     Overtime & Top Dept Info             │
│              │                                           │
├──────────────┴──────────────────────────────────────────┤
│                                                          │
│         Recent Attendance Table (Full Width)             │
│         With Pagination                                 │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

---

## Color Scheme

| Element | Color | Hex Code | Usage |
|---------|-------|----------|-------|
| Present | Dark Green | #27AE60 | Positive status |
| Absent | Red | #E74C3C | Negative status |
| On Leave | Orange | #F39C12 | Neutral/Pending |
| Remote/Field | Blue | #3498DB | Alternative status |
| Late Arrival | Yellow/Orange | #F1C40F | Warning status |
| Primary Button | Dark Green | #1B5C3F | Action buttons |
| Card Background | White | #FFFFFF | Content containers |
| Header Background | Light Gray | #F8F9FA | Section headers |
| Border | Light Gray | #E0E0E0 | Dividers |
| Text Primary | Dark Gray | #2C3E50 | Main text |
| Text Secondary | Medium Gray | #7F8C8D | Labels, subtext |

---

## Responsive Design

```
DESKTOP VIEW (> 1024px)
├─ Key Metrics: 5 columns (single row or 4+1)
├─ Charts Section: 2 columns
│  ├─ Left: Bar chart (60%)
│  └─ Right: Donut + Info (40%)
├─ Table: Full width with horizontal scroll
└─ Pagination: Right-aligned

TABLET VIEW (768px - 1024px)
├─ Key Metrics: 2x2 + 1 grid
├─ Charts Section: Stacked vertically
│  ├─ Bar chart (full width)
│  └─ Donut + Info (full width)
├─ Table: Scrollable horizontally
└─ Pagination: Centered

MOBILE VIEW (< 768px)
├─ Key Metrics: Single column (scrollable)
├─ Charts: Stacked vertically
├─ Table: Collapsed or scrollable with key columns
└─ Pagination: Simplified (Prev/Next only)
```

---

## Data Flow & API Integration

```
User Navigates to Attendance Dashboard
    ↓
Dashboard Component Loads
    ↓
┌──────────────────────────────────────────────────┐
│  Parallel API Calls:                             │
│                                                   │
│  1. GET /api/attendance/summary                  │
│     → Present, Absent, On Leave, Remote, Late   │
│                                                   │
│  2. GET /api/attendance/by-department            │
│     → Attendance stats grouped by department    │
│                                                   │
│  3. GET /api/attendance/status-breakdown         │
│     → Overall status distribution               │
│                                                   │
│  4. GET /api/attendance/overtime                 │
│     → Monthly overtime hours & top department   │
│                                                   │
│  5. GET /api/attendance/recent                   │
│     → Recent attendance records (paginated)      │
│                                                   │
└──────────────────────────────────────────────────┘
    ↓
Dashboard Renders All Components
    ↓
Real-time Updates (Auto-refresh every 5 minutes)
```

---

## Attendance Status Types

```
✓ PRESENT (Green)
  └─ Employee is present at work

⚠ LATE (Orange/Yellow)
  └─ Employee arrived after scheduled time

✗ ABSENT (Red)
  └─ Employee did not show up

🏖 ON LEAVE (Orange)
  └─ Employee is on approved leave

📍 REMOTE/FIELD (Blue)
  └─ Employee is working remotely or in field
```

---

## Key Features & Interactions

✅ **Real-Time Updates**: Live status updates throughout the day  
✅ **Department Breakdown**: View attendance by department  
✅ **Visual Charts**: Bar chart and donut chart visualizations  
✅ **Overtime Tracking**: Monitor overtime hours and top departments  
✅ **Detailed Records**: Individual employee attendance records  
✅ **Edit Capability**: Edit attendance entries if needed  
✅ **Pagination**: Navigate through large attendance datasets  
✅ **Status Indicators**: Color-coded status badges  
✅ **Responsive Design**: Works on all device sizes  

---

## Interaction Flows

### 1. **View Employee Details**
```
User clicks on employee name in table
    ↓
Employee detail view opens (modal/page)
    ↓
Display: Full attendance record, shifts, history
    ↓
Options: Edit, Delete, Add note
```

### 2. **Edit Attendance Record**
```
User clicks Edit icon
    ↓
Edit modal/form opens
    ↓
Fields: In Time, Out Time, Status, Department, Notes
    ↓
User updates and saves
    ↓
API: PUT /api/attendance/{id}
    ↓
Table updates with new data
```

### 3. **Paginate Results**
```
User clicks page number (e.g., "2")
    ↓
API: GET /api/attendance/recent?page=2&limit=10
    ↓
Table refreshes with new records
    ↓
Pagination indicator updates
```

### 4. **Filter by Department**
```
User selects department from dropdown
    ↓
API: GET /api/attendance/by-department?dept=Finance
    ↓
Charts and table update
    ↓
Metrics recalculate
```

### 5. **Export Report** (Future Feature)
```
User clicks Export button
    ↓
Options: PDF, Excel, CSV
    ↓
API: GET /api/attendance/export?format=pdf
    ↓
File downloads to user's device
```

---

## Table Customization

### Sortable Columns
- Employee name (A-Z or Z-A)
- Department (alphabetical)
- In Time (earliest to latest)
- Out Time (earliest to latest)
- Status (Present, Absent, Late, etc.)

### Filterable Options
- By Department
- By Status (Present, Absent, Late, On Leave, Remote)
- By Shift (Morning, Afternoon, Night)
- By Date Range

### Column Visibility
- Users can show/hide columns
- Remember preferences in local storage
- Default columns: Employee, Department, Shift, In Time, Out Time, Status

---

## Mobile Optimization Notes

- **Stacked Metrics**: Cards stack vertically on mobile
- **Simplified Table**: Show only critical columns (Name, Status, In Time)
- **Swipe Navigation**: Swipe left/right for pagination
- **Touch Targets**: Minimum 44px for buttons and links
- **Chart Adaptation**: Bar chart can rotate or simplify on small screens
- **Collapsible Sections**: Charts can be collapsed to save space

---

## Performance Considerations

```
Load Time Optimization:
├─ Lazy load charts library
├─ Cache attendance data
├─ Paginate table (10-25 rows per page)
├─ Compress images/avatars
└─ Minify CSS/JavaScript

Data Refresh Strategy:
├─ Auto-refresh metrics every 5 minutes
├─ Manual refresh button for users
├─ WebSocket for real-time check-in/check-out updates
└─ Background sync for offline functionality
```

---

## Future Enhancement Ideas

🚀 **Advanced Filters**: Date range, location, shift type  
📊 **Analytics**: Attendance trends, patterns, predictions  
📱 **Mobile Check-in**: QR code or biometric check-in  
📧 **Notifications**: Auto-alert on late arrival or absence  
🔄 **Bulk Actions**: Bulk mark present/absent  
📈 **Reports**: Generate detailed attendance reports  
🤖 **AI Insights**: Predict attendance patterns  
🔐 **Role-Based Access**: Different views for managers vs. HR  
⏱️ **Time Tracking**: Detailed time-in-motion tracking  
🎯 **KPI Tracking**: Attendance goals and metrics  

---

## API Endpoints Reference

```
GET /api/attendance/summary
    → Returns: {present, absent, onLeave, remote, late}

GET /api/attendance/by-department
    → Returns: [{dept, total, present, absent, onLeave}, ...]

GET /api/attendance/status-breakdown
    → Returns: [{status, count, percentage}, ...]

GET /api/attendance/overtime
    → Returns: {totalHours, topDepartment, topDepartmentHours}

GET /api/attendance/recent?page=1&limit=10
    → Returns: {records: [...], total, pages, currentPage}

GET /api/attendance/{id}
    → Returns: {id, employee, dept, shift, inTime, outTime, status}

PUT /api/attendance/{id}
    → Body: {inTime, outTime, status, notes}
    → Returns: {success, message, data}

DELETE /api/attendance/{id}
    → Returns: {success, message}

GET /api/attendance/export?format=pdf
    → Returns: PDF file download
```

---

## Time Format Standards

```
Time Display: HH:MM AM/PM
  Example: 08:15 AM, 05:03 PM

Date Display: DD MMM YYYY
  Example: 16 Oct 2025

DateTime Display: DD MMM YYYY, HH:MM AM/PM
  Example: 16 Oct 2025, 11:04am

Duration Display: XXhrs or XXmins
  Example: 47hrs, 30mins, 9hrs 15mins
```

---

## Accessibility Features

♿ **WCAG 2.1 Compliance** (AA level)
- Color-blind friendly color schemes
- High contrast text
- Keyboard navigation support
- Screen reader compatible
- ARIA labels on charts
- Focus indicators on interactive elements

---

**Attendance Dashboard Version**: 1.0  
**Last Updated**: January 2026  
**Status**: Active & Production Ready  
**Responsible Team**: HR & Attendance Management
