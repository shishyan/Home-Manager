# School calendar

Family Calendar and Education Planner share a school schedule. Planner filters to
the active student's grade. School entries also appear alongside home study blocks
in the planner's week view. Holiday and registration ranges include both endpoints.

## Sources and coverage

- Peepal's published 2026–27 annual calendar, checked 28 September 2026.
- CBSE's official 2026–27 LOC circular, including payment and correction windows.
- September 2026 through March 2027 is included. Ordinary Sundays and routine
  school-day counters are omitted.
- Annual entries are published schedules, subject to later school changes.
  Subject-wise 2027 board and practical dates remain pending official publication.
  Class 7 exams are school-defined, not a national CBSE timetable.

`data/school-calendar.json` contains only public-source dates. Private parent
circulars are encrypted in `data/school-calendar.enc.json`. Unlock them using the
existing private-feed passphrase, or import a locally prepared school dates file
from the calendar's disclosure. Updated notices override affected annual entries.
The password is not saved; imported dates remain in this browser's saved settings.
Repeat imports replace the feed and do not append duplicate records.

Private updates include the Grade 7 mid-exam timetable, pickup information,
Grade 12 PCM/Computer Science pre-board timetables, PTMs and revised holidays.
Where a circular has conflicting durations or lacks a start time, event details
say so. No missing times or unannounced board dates are invented.

School dates are projected into the app calendar without copying them into the
family event collection. User-entered school events are projected too. No events
are created in external Google Calendar, and source checking is not automatic.
Refresh the source datasets when new official schedules are issued.
