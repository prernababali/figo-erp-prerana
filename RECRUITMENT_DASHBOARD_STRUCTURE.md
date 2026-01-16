# FigoERP Recruitment Dashboard Structure

**Version:** 1.0  
**Last Updated:** January 2026

---

## Recruitment Dashboard Layout Overview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                     FIGO ERP - RECRUITMENT DASHBOARD                        │
├─────────────────────────────────────────────────────────────────────────────┤
│ ┌──────────────────┐                                                         │
│ │  LEFT SIDEBAR    │  ┌──────────────────────────────────────────────────┐  │
│ │                  │  │         RECRUITMENT DASHBOARD HEADER             │  │
│ │  Dashboard       │  │                                                   │  │
│ │  Employee Hub    │  └──────────────────────────────────────────────────┘  │
│ │  Attendance      │                                                         │
│ │  Leave           │  ┌──────────────────────────────────────────────────┐  │
│ │  Payroll         │  │       KEY METRICS ROW (4 Cards)                   │  │
│ │  Compliance      │  │                                                   │  │
│ │  Training &      │  │ ┌──────────┐ ┌──────────┐ ┌──────────┐┌────────┐│  │
│ │  Performance     │  │ │ Open     │ │ Closed   │ │ Pending  ││ New    ││  │
│ │  ► Recruitment   │  │ │ Jobs     │ │ Jobs     │ │ Jobs     ││Hires   ││  │
│ │    - Job Requis. │  │ │   15     │ │   28     │ │    4     ││ This M ││  │
│ │    - Job Opening │  │ │          │ │          │ │          ││   8    ││  │
│ │    - Applicants  │  │ └──────────┘ └──────────┘ └──────────┘└────────┘│  │
│ │    - Interviews  │  │                                                   │  │
│ │    - Offers      │  └──────────────────────────────────────────────────┘  │
│ │    - Onboarding  │                                                         │
│ │  Exit & Offb.    │  ┌─────────────────────────────┐ ┌──────────────────┐ │
│ │                  │  │ CANDIDATE PIPELINE SUMMARY  │ │ SOURCE            │ │
│ │                  │  │ (Horizontal Bar Chart)      │ │ EFFECTIVENESS     │ │
│ │                  │  │                             │ │ (Donut Chart)     │ │
│ │                  │  │ Applied     ▓▓▓▓▓▓▓▓▓▓▓▓  │ │   28 Total Hires  │ │
│ │                  │  │ 120 Cand.   ███████░░░░░  │ │                   │ │
│ │                  │  │                             │ │  ◐◑◒ ← Donut     │ │
│ │                  │  │ Screening   ▓▓▓▓▓▓░░░░░░  │ │                   │ │
│ │                  │  │ 75 Cand.    ███░░░░░░░░░  │ │  LinkedIn: 40%    │ │
│ │                  │  │                             │ │  Job boards: 20%  │ │
│ │                  │  │ Interview   ▓▓▓░░░░░░░░░░  │ │  Referrals: 30%   │ │
│ │                  │  │ 32 Cand.    ██░░░░░░░░░░░ │ │  Other: 10%       │ │
│ │                  │  │                             │ │                   │ │
│ │                  │  │ Offer       ▓▓░░░░░░░░░░░░ │ └──────────────────┘ │
│ │                  │  │ 10 Cand.    ░░░░░░░░░░░░░░ │                       │
│ │                  │  │                             │                       │
│ │                  │  │ Hired       ▓░░░░░░░░░░░░░ │                       │
│ │                  │  │ 4 Cand.     ░░░░░░░░░░░░░░ │                       │
│ │                  │  │                             │                       │
│ │                  │  └─────────────────────────────┘                       │
│ │                  │                                                         │
│ │                  │  ┌─────────────────────────────┐ ┌──────────────────┐ │
│ │                  │  │  PENDING APPROVALS          │ │ UPCOMING          │ │
│ │                  │  │  (List with Actions)        │ │ INTERVIEWS        │ │
│ │                  │  │                             │ │ (Calendar Table)  │ │
│ │                  │  │ J Job Requisition:          │ │                   │ │
│ │                  │  │   Senior Frontend Engineer  │ │ Mon 18            │ │
│ │                  │  │   Alex Johnson              │ │ David Chen        │ │
│ │                  │  │   [View] [Approve]          │ │ UI/UX Des. Role   │ │
│ │                  │  │                             │ │                   │ │
│ │                  │  │ J Job Requisition:          │ │ Tue 19            │ │
│ │                  │  │   Senior Frontend Engineer  │ │ Emily Roberts     │ │
│ │                  │  │   Alex Johnson              │ │ Data Analyst Role │ │
│ │                  │  │   [View] [Approve]          │ │                   │ │
│ │                  │  │                             │ │ Wed 20            │ │
│ │                  │  │ J Job Requisition:          │ │ No Interviews     │ │
│ │                  │  │   Senior Frontend Engineer  │ │ Scheduled         │ │
│ │                  │  │   Alex Johnson              │ │                   │ │
│ │                  │  │   [View] [Approve]          │ │ Thu 21            │ │
│ │                  │  │                             │ │ David Chen        │ │
│ │                  │  │ J Job Requisition:          │ │ UI/UX Des. Role   │ │
│ │                  │  │   Senior Frontend Engineer  │ │                   │ │
│ │                  │  │   Alex Johnson              │ │ Fri 20            │ │
│ │                  │  │   [View] [Approve]          │ │ Emily Roberts     │ │
│ │                  │  │                             │ │ Data Analyst Role │ │
│ │                  │  │                             │ │                   │ │
│ │                  │  │                             │ │ Mon 23            │ │
│ │                  │  │                             │ │ No Interviews     │ │
│ │                  │  │                             │ │ Scheduled         │ │
│ │                  │  │                             │ │                   │ │
│ │                  │  │                             │ │ [View Interview   │ │
│ │                  │  │                             │ │  Screen]          │ │
│ │                  │  │                             │ │                   │ │
│ │                  │  └─────────────────────────────┘ └──────────────────┘ │
│ │                  │                                                         │
│ └──────────────────┘                                                         │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Component Breakdown

### 1. **Navigation Sidebar**

#### Main Menu Items:
- 📊 Dashboard
- 👥 Employee Hub
- 📋 Attendance
- 🏖️ Leave
- 💰 Payroll
- ✅ Compliance
- 🎓 Training & Performance
- **► Recruitment** (Expanded Section)
  - ⭕ Job Requisitions
  - ⭕ Job Openings
  - ⭕ Applicants
  - ⭕ Interviews
  - ⭕ Offers
  - ⭕ Onboarding
- 🚪 Exit & Offboarding

---

### 2. **Header Section**
- **Page Title**: "Recruitment Dashboard"
- **Location**: Top center of main content area
- **Breadcrumb Navigation**: (Optional)

---

### 3. **Key Metrics Row** (Top 4 Cards)

| Card # | Metric | Value | Description |
|--------|--------|-------|-------------|
| 1 | Open Jobs | 15 | Currently active job postings |
| 2 | Closed Jobs | 28 | Closed positions (filled or archived) |
| 3 | Pending Jobs | 4 | Jobs awaiting approval |
| 4 | New Hires This Month | 8 | Successfully onboarded this month |

**Layout**: 4 equal-width cards in a single horizontal row

---

### 4. **Main Content Grid** (Left & Right Columns)

#### a) **Candidate Pipeline Summary**
- **Type**: Horizontal Stacked Bar Chart
- **Purpose**: Show candidates at each recruitment stage
- **Stages**:
  1. **Applied** - 120 Candidates (longest bar)
     - Full bar with label
  2. **Screening** - 75 Candidates
     - Shortened bar (62.5% of applied)
  3. **Interview** - 32 Candidates
     - Shorter bar (26.7% of applied)
  4. **Offer** - 10 Candidates
     - Small bar (8.3% of applied)
  5. **Hired** - 4 Candidates
     - Smallest bar (3.3% of applied)

**Visual Style**:
- Green/teal color for active stages
- Bar width proportional to candidate count
- Count displayed on the right side of each bar

---

#### b) **Source Effectiveness** (Donut Chart)
- **Type**: Donut/Ring Chart
- **Center Text**: "28 Total Hires"
- **Legend** (Right side):
  - 🟩 LinkedIn: 40% (Dark Green)
  - 🟩 Job boards: 20% (Medium Green)
  - 🟩 Referrals: 30% (Teal)
  - 🟩 Other: 10% (Light Green)

**Purpose**: Show which recruitment channels are most effective

---

#### c) **Pending Approvals**
- **Type**: List of Job Requisitions
- **Fields per Item**:
  - 🔤 (Letter Avatar): "J" for Job
  - **Job Title**: "Job Requisition: Senior Frontend Engineer"
  - **Candidate/Posted By**: Name of person
  - **Actions**: 
    - [View] button (secondary style)
    - [Approve] button (green primary style)

**Sample Data Structure**:
```
J  Job Requisition: Senior Frontend Engineer
   Alex Johnson
   [View]  [Approve]

J  Job Requisition: Senior Frontend Engineer
   Alex Johnson
   [View]  [Approve]

J  Job Requisition: Senior Frontend Engineer
   Alex Johnson
   [View]  [Approve]

J  Job Requisition: Senior Frontend Engineer
   Alex Johnson
   [View]  [Approve]
```

**Scrollable List**: 4+ items visible with scroll if needed

---

#### d) **Upcoming Interviews**
- **Type**: Calendar/Schedule Table
- **Layout**: Days in rows, Interview details in columns
- **Column Structure**:
  - Day (Mon 18, Tue 19, Wed 20, etc.)
  - Candidate Name
  - Interview Role/Position
  - Status (Scheduled/No Interviews Scheduled)

**Sample Data**:
```
┌─────────────────────────────────────────────────────────────────┐
│ Mon 18  │ David Chen         │ UI/UX Designer Role              │
├─────────────────────────────────────────────────────────────────┤
│ Tue 19  │ Emily Roberts      │ Data Analyst Role                │
├─────────────────────────────────────────────────────────────────┤
│ Wed 20  │ No Interviews Scheduled                                │
├─────────────────────────────────────────────────────────────────┤
│ Thu 21  │ David Chen         │ UI/UX Designer Role              │
├─────────────────────────────────────────────────────────────────┤
│ Fri 20  │ Emily Roberts      │ Data Analyst Role                │
├─────────────────────────────────────────────────────────────────┤
│ Mon 23  │ No Interviews Scheduled                                │
└─────────────────────────────────────────────────────────────────┘
```

**Action Button**: "[View Interview Screen]" at bottom (full width, green)

---

## Layout Grid Structure

```
┌─────────────────────────────────────────────────────┐
│         Key Metrics Row (4 Cards - Full Width)      │
├─────────────────────────┬───────────────────────────┤
│                         │                           │
│  Candidate Pipeline     │  Source Effectiveness     │
│  Summary (Left 50%)     │  (Right 50%)              │
│                         │                           │
├─────────────────────────┼───────────────────────────┤
│                         │                           │
│  Pending Approvals      │  Upcoming Interviews      │
│  (Left 50%)             │  (Right 50%)              │
│                         │                           │
└─────────────────────────┴───────────────────────────┘
```

---

## Color Scheme

| Element | Color | Hex Code | Usage |
|---------|-------|----------|-------|
| Primary Green | Dark Green | #1B5C3F | Buttons, active elements, charts |
| Secondary Green | Teal | #2D8659 | Chart segments, accents |
| Light Green | Light Teal | #A8D5BA | Chart segments, backgrounds |
| Approve Button | Dark Green | #1B5C3F | Action buttons |
| View Button | Light Gray | #F0F0F0 | Secondary buttons |
| Card Background | White | #FFFFFF | Content containers |
| Border | Light Gray | #E0E0E0 | Dividers |
| Text Primary | Dark Gray | #333333 | Main text |
| Text Secondary | Medium Gray | #666666 | Labels, subtext |

---

## Responsive Design

```
DESKTOP VIEW (> 1024px)
├─ Sidebar: Fixed 250px Left
├─ Key Metrics: 4 columns
├─ Main Grid: 2 columns (50% - 50%)
│  ├─ Left: Pipeline + Approvals
│  └─ Right: Source Effectiveness + Interviews
└─ Content: Full width with padding

TABLET VIEW (768px - 1024px)
├─ Sidebar: Collapsible
├─ Key Metrics: 2x2 grid
├─ Main Grid: Single column (stacked)
│  ├─ Pipeline
│  ├─ Source Effectiveness
│  ├─ Approvals
│  └─ Interviews
└─ Cards: Full width

MOBILE VIEW (< 768px)
├─ Sidebar: Hidden hamburger menu
├─ Key Metrics: 1 column (vertical scroll)
├─ Main Grid: Single column
│  └─ All sections stacked
└─ Charts: Optimized for small screens
```

---

## Data Flow & API Integration

```
User Navigates to Recruitment Dashboard
    ↓
Dashboard Component Loads
    ↓
┌─────────────────────────────────────────────────┐
│  Parallel API Calls:                            │
│                                                  │
│  1. GET /api/recruitment/dashboard/summary      │
│     → Open Jobs, Closed Jobs, Pending, Hires   │
│                                                  │
│  2. GET /api/recruitment/dashboard/pipeline    │
│     → Candidate counts by stage                │
│                                                  │
│  3. GET /api/recruitment/dashboard/source      │
│     → Effectiveness data by source             │
│                                                  │
│  4. GET /api/recruitment/dashboard/approvals   │
│     → Pending job requisitions                 │
│                                                  │
│  5. GET /api/recruitment/dashboard/interviews  │
│     → Upcoming interviews schedule             │
│                                                  │
└─────────────────────────────────────────────────┘
    ↓
Dashboard Renders All Components
    ↓
Real-time Updates (if applicable)
```

---

## Recruitment Sub-Menu Navigation

When user expands **Recruitment** in sidebar, following pages are accessible:

| Menu Item | Purpose | Key Features |
|-----------|---------|--------------|
| **Job Requisitions** | Create & manage job requests | Create form, list, status tracking |
| **Job Openings** | Post and manage open positions | Job details, posting, applications count |
| **Applicants** | View all job applications | Filter by position, status, rating |
| **Interviews** | Schedule and conduct interviews | Calendar, feedback, interview notes |
| **Offers** | Generate and track job offers | Offer details, acceptance status |
| **Onboarding** | New hire onboarding process | Checklist, document upload, status |

---

## Key Features & Interactions

✅ **Real-Time Metrics**: Live update of job counts and new hires  
✅ **Visual Pipeline**: Clear visibility of candidate progression  
✅ **Source Analytics**: Track recruiting channel effectiveness  
✅ **Quick Actions**: One-click approve/view for pending items  
✅ **Interview Schedule**: Calendar view of upcoming interviews  
✅ **Expandable Menu**: Recruitment submenu with detailed sections  
✅ **Responsive Design**: Works seamlessly on all devices  
✅ **Status Tracking**: Visual indicators for all recruiting stages  

---

## Interaction Flows

### 1. **Approve Job Requisition**
```
User clicks [Approve] button
    ↓
Modal/Dialog Opens (Confirm Action)
    ↓
User confirms approval
    ↓
API: POST /api/recruitment/requisitions/{id}/approve
    ↓
Dashboard updates
    ↓
Success notification shown
```

### 2. **View Interview Details**
```
User clicks [View Interview Screen]
    ↓
Navigate to: /recruitment/interviews
    ↓
Interview list/calendar page loads
    ↓
Display full interview schedule with details
```

### 3. **Filter/Search**
```
Future Enhancement:
- Filter candidates by stage
- Search job requisitions
- Sort interviews by date
- Filter approvals by status
```

---

## Mobile Optimization Notes

- **Stacked Layout**: All sections stack vertically on mobile
- **Tap Targets**: Minimum 44px touch targets for buttons
- **Collapsible Sidebar**: Hamburger menu for navigation
- **Chart Adaptation**: Bar charts rotate to vertical on small screens
- **Table Scrolling**: Horizontal scroll for interview table

---

## Performance Considerations

```
Load Time Optimization:
├─ Lazy load chart libraries
├─ Cache dashboard data
├─ Paginate long lists (approvals, interviews)
├─ Compress images/avatars
└─ Minify CSS/JavaScript

Data Refresh:
├─ Auto-refresh metrics every 5 minutes
├─ Real-time updates for approvals
└─ Manual refresh option for user
```

---

## Future Enhancement Ideas

🚀 **Advanced Filtering**: Filter by department, location, role type  
📊 **Advanced Analytics**: Time-to-hire, cost-per-hire metrics  
📧 **Email Notifications**: Auto-notify on pending approvals  
🔄 **Bulk Actions**: Approve multiple requisitions at once  
📱 **Mobile App**: Native mobile application for on-the-go recruitment  
🤖 **AI Matching**: AI-powered candidate matching  
📈 **Reporting**: Generate recruitment reports and trends  
🔐 **Role-Based Access**: Different views for recruiters vs. managers  

---

## API Endpoints Reference

```
GET /api/recruitment/dashboard/summary
    → Returns: {openJobs, closedJobs, pendingJobs, newHires}

GET /api/recruitment/dashboard/pipeline
    → Returns: [{stage, count, percentage}, ...]

GET /api/recruitment/dashboard/source
    → Returns: [{source, count, percentage}, ...]

GET /api/recruitment/dashboard/approvals
    → Returns: [{id, title, candidate, status}, ...]

GET /api/recruitment/dashboard/interviews
    → Returns: [{date, candidate, position, status}, ...]

POST /api/recruitment/requisitions/{id}/approve
    → Body: {approvedBy, notes}
    → Returns: {success, message}

POST /api/recruitment/requisitions/{id}/reject
    → Body: {rejectedBy, reason}
    → Returns: {success, message}
```

---

**Recruitment Dashboard Version**: 1.0  
**Last Updated**: January 2026  
**Status**: Active & Production Ready  
**Responsible Team**: HR & Recruitment Department
