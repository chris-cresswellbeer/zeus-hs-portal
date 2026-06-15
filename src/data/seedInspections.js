// Seed site inspections
export const INIT_SITE_INSPECTIONS = [
  {
    id:"si001", type:"annual_hs", date:"2024-03-15", inspector:"Linda Osei", location:"Zeus HQ — Full Site",
    status:"closed", overallScore:30, maxScore:34,
    sections:{ s1:{q1_1:2,q1_2:2,q1_3:2,q1_4:1}, s2:{q2_1:2,q2_2:2,q2_3:1}, s3:{q3_1:2,q3_2:1,q3_3:2}, s4:{q4_1:2,q4_2:2,q4_3:2}, s5:{q5_1:2,q5_2:2,q5_3:2,q5_4:1} },
    nonConformances:[
      { id:"nc001", section:"Fire Safety & Emergency Procedures", finding:"Fire drill not completed in last 6 months — last drill was 8 months ago", severity:"major", photos:[], actionOwner:"Mark Davies", actionDue:"2024-04-12", actionStatus:"complete", actionNote:"Fire drill completed 9 April 2024. All staff evacuated in 3m 42s." },
      { id:"nc002", section:"Manual Handling & Ergonomics", finding:"3 DSE workstations not ergonomically assessed — Finance department", severity:"minor", photos:[], actionOwner:"Linda Osei", actionDue:"2024-04-19", actionStatus:"complete", actionNote:"DSE assessments completed for all Finance staff." },
      { id:"nc003", section:"Chemical & COSHH", finding:"Chemical segregation plan not posted inside Chemical Store", severity:"minor", photos:[], actionOwner:"Linda Osei", actionDue:"2024-03-29", actionStatus:"complete", actionNote:"Laminated segregation plan posted." },
      { id:"nc004", section:"Housekeeping & General Safety", finding:"Accident reporting procedure not understood by 2 new starters in warehouse", severity:"minor", photos:[], actionOwner:"Mark Davies", actionDue:"2024-04-05", actionStatus:"complete", actionNote:"Toolbox talk delivered. New starter induction updated." },
    ],
    summary:"Generally good standard of H&S management across site. Key actions required around fire drill frequency and DSE assessment programme. Chemical segregation to be addressed immediately.",
    nextDue:"2025-03-15",
  },
  {
    id:"si002", type:"fire_risk", date:"2024-06-20", inspector:"Linda Osei", location:"Zeus HQ — Full Site",
    status:"closed", overallScore:26, maxScore:28,
    sections:{ s1:{q1_1:2,q1_2:2,q1_3:2}, s2:{q2_1:2,q2_2:2,q2_3:1}, s3:{q3_1:2,q3_2:2}, s4:{q4_1:2,q4_2:1,q4_3:2}, s5:{q5_1:2,q5_2:2,q5_3:2} },
    nonConformances:[
      { id:"nc005", section:"Fuel & Combustibles", finding:"One damaged cable run identified in Electrical Workshop — potential overheating risk", severity:"major", photos:[], actionOwner:"Daniel Okonkwo", actionDue:"2024-07-04", actionStatus:"complete", actionNote:"Cable replaced and insulation tested. Signed off by electrical contractor." },
      { id:"nc006", section:"Means of Escape", finding:"Emergency lighting unit in Stairwell B not functioning — bulb failure", severity:"minor", photos:[], actionOwner:"Daniel Okonkwo", actionDue:"2024-06-28", actionStatus:"complete", actionNote:"Bulb replaced and unit tested. Recorded in maintenance log." },
    ],
    summary:"Fire risk assessment demonstrates good compliance overall. Damaged cable in Electrical Workshop requires urgent remediation. Emergency lighting programme to be reviewed.",
    nextDue:"2025-06-20",
  },
  {
    id:"si003", type:"weekly_walk", date:"2025-01-06", inspector:"Sarah Mitchell", location:"Warehouse & Loading Bay",
    status:"closed", overallScore:16, maxScore:18,
    sections:{ s1:{q1_1:2,q1_2:2,q1_3:2}, s2:{q2_1:2,q2_2:2}, s3:{q3_1:2,q3_2:2}, s4:{q4_1:1,q4_2:1} },
    nonConformances:[
      { id:"nc007", section:"General Safety", finding:"New potential slip hazard identified — dock entrance mat edge buckled", severity:"minor", photos:[], actionOwner:"Daniel Okonkwo", actionDue:"2025-01-13", actionStatus:"complete", actionNote:"Mat replaced with freeze-rated anti-slip matting." },
      { id:"nc008", section:"General Safety", finding:"Racking climb observed — Ryan Fitzgerald. Verbal warning issued", severity:"major", photos:[], actionOwner:"Mark Davies", actionDue:"2025-01-10", actionStatus:"complete", actionNote:"Written warning issued. Step ladder brackets ordered." },
    ],
    summary:"Generally satisfactory walkround. Two items for action — dock mat and racking climb observed.",
    nextDue:"2025-01-13",
  },
  {
    id:"si004", type:"weekly_walk", date:"2025-01-13", inspector:"Sarah Mitchell", location:"Warehouse & Loading Bay",
    status:"closed", overallScore:17, maxScore:18,
    sections:{ s1:{q1_1:2,q1_2:2,q1_3:2}, s2:{q2_1:2,q2_2:2}, s3:{q3_1:2,q3_2:2}, s4:{q4_1:2,q4_2:1} },
    nonConformances:[
      { id:"nc009", section:"General Safety", finding:"Platform truck found unattended on Loading Bay slope without brake applied", severity:"minor", photos:[], actionOwner:"Mark Davies", actionDue:"2025-01-20", actionStatus:"complete", actionNote:"Toolbox talk delivered. 'Apply Brake' stickers ordered." },
    ],
    summary:"Improvement on previous week. Dock mat replaced satisfactorily. Platform truck braking issue noted.",
    nextDue:"2025-01-20",
  },
  {
    id:"si005", type:"fire_drill", date:"2025-04-09", inspector:"Linda Osei", location:"Zeus HQ — Full Site",
    status:"closed", overallScore:12, maxScore:14,
    sections:{ s1:{q1_1:2,q1_2:2,q1_3:2}, s2:{q2_1:2,q2_2:1}, s3:{q3_1:2,q3_2:1} },
    nonConformances:[
      { id:"nc010", section:"Assembly Point", finding:"Roll call took 4m 20s — target is 3m. Two staff not identified quickly", severity:"minor", photos:[], actionOwner:"Mark Davies", actionDue:"2025-04-23", actionStatus:"complete", actionNote:"Roll call procedure updated. Fire wardens briefed on name-check protocol." },
      { id:"nc011", section:"Fire Wardens", finding:"One fire warden not visibly identifiable during evacuation — no hi-vis bib worn", severity:"minor", photos:[], actionOwner:"Linda Osei", actionDue:"2025-04-16", actionStatus:"complete", actionNote:"Hi-vis bibs issued to all fire wardens." },
    ],
    summary:"Evacuation completed in 3m 58s — within acceptable range but above 3m target. Roll call procedure needs tightening. Hi-vis identification for wardens to be resolved.",
    nextDue:"2025-10-09",
  },
  {
    id:"si006", type:"annual_hs", date:"2025-03-18", inspector:"Linda Osei", location:"Zeus HQ — Full Site",
    status:"closed", overallScore:32, maxScore:34,
    sections:{ s1:{q1_1:2,q1_2:2,q1_3:2,q1_4:2}, s2:{q2_1:2,q2_2:2,q2_3:2}, s3:{q3_1:2,q3_2:1,q3_3:2}, s4:{q4_1:2,q4_2:2,q4_3:2}, s5:{q5_1:2,q5_2:2,q5_3:2,q5_4:1} },
    nonConformances:[
      { id:"nc012", section:"Chemical & COSHH", finding:"Two new chemicals introduced without COSHH assessment — identified in Chemical Store", severity:"major", photos:[], actionOwner:"Linda Osei", actionDue:"2025-04-04", actionStatus:"complete", actionNote:"COSHH assessments completed. New product introduction procedure updated." },
      { id:"nc013", section:"Housekeeping & General Safety", finding:"Two new warehouse starters unclear on near miss reporting procedure", severity:"minor", photos:[], actionOwner:"Mark Davies", dueDate:"2025-04-04", actionStatus:"complete", actionNote:"Near miss reporting included in updated warehouse induction." },
    ],
    summary:"Significant improvement on 2024 audit — score up 6 points. COSHH management remains a focus area. Reporting culture continues to develop well.",
    nextDue:"2026-03-18",
  },
  {
    id:"si007", type:"fire_risk", date:"2025-06-25", inspector:"Linda Osei", location:"Zeus HQ — Full Site",
    status:"open", overallScore:27, maxScore:28,
    sections:{ s1:{q1_1:2,q1_2:2,q1_3:2}, s2:{q2_1:2,q2_2:2,q2_3:2}, s3:{q3_1:2,q3_2:2}, s4:{q4_1:2,q4_2:2,q4_3:2}, s5:{q5_1:2,q5_2:2,q5_3:1} },
    nonConformances:[
      { id:"nc014", section:"Fire Fighting", finding:"Sprinkler supply isolation valve not protected — accessible to unauthorised persons", severity:"major", photos:[], actionOwner:"Daniel Okonkwo", actionDue:"2025-07-09", actionStatus:"complete", actionNote:"Locked valve guard fitted. Key held by H&S Manager." },
    ],
    summary:"Best fire risk assessment score to date. Single major finding around sprinkler valve access — addressed quickly. Maintenance of this standard required going forward.",
    nextDue:"2026-06-25",
  },
  {
    id:"si008", type:"weekly_walk", date:"2025-05-05", inspector:"Sarah Mitchell", location:"Production Floor & Packing Hall",
    status:"closed", overallScore:16, maxScore:18,
    sections:{ s1:{q1_1:2,q1_2:2,q1_3:2}, s2:{q2_1:2,q2_2:2}, s3:{q3_1:1,q3_2:2}, s4:{q4_1:1,q4_2:2} },
    nonConformances:[
      { id:"nc015", section:"Equipment & Machinery", finding:"Damaged machine guard observed on Packaging Line 2 — edge sharp and potentially laceration risk", severity:"major", photos:[], actionOwner:"Daniel Okonkwo", actionDue:"2025-05-09", actionStatus:"complete", actionNote:"Machine taken out of service. Guard replaced." },
      { id:"nc016", section:"General Safety", finding:"Angle grinder in use without face shield — PPE station depleted", severity:"major", photos:[], actionOwner:"Sarah Mitchell", actionDue:"2025-05-09", actionStatus:"complete", actionNote:"Stop-task instruction issued. PPE station restocked. Minimum stock levels set." },
    ],
    summary:"Two significant safety observations on Production Floor. Machine guard and PPE station issues both require immediate action.",
    nextDue:"2025-05-12",
  },
  {
    id:"si009", type:"weekly_walk", date:"2026-05-05", inspector:"Sarah Mitchell", location:"Full Site",
    status:"open", overallScore:17, maxScore:18,
    sections:{ s1:{q1_1:2,q1_2:2,q1_3:2}, s2:{q2_1:2,q2_2:2}, s3:{q3_1:2,q3_2:2}, s4:{q4_1:2,q4_2:1} },
    nonConformances:[
      { id:"nc017", section:"General Safety", finding:"Loading bay handrail loose — mounting bracket corroded. Access restricted to single person with adjacent rail used", severity:"major", photos:[], actionOwner:"Daniel Okonkwo", actionDue:"2026-05-16", actionStatus:"open", actionNote:"" },
    ],
    summary:"Good general standard. Loading bay handrail corrosion issue requires urgent attention — marine-grade replacement to be fitted.",
    nextDue:"2026-05-12",
  },
  {
    id:"si010", type:"office_housekeeping", date:"2026-05-05", inspector:"Sarah Mitchell", location:"Office Block — All Floors",
    status:"closed", overallScore:22, maxScore:26,
    sections:{ s1:{q1_1:2,q1_2:2,q1_3:2}, s2:{q2_1:2,q2_2:1,q2_3:2}, s3:{q3_1:2,q3_2:2,q3_3:2}, s4:{q4_1:2,q4_2:1}, s5:{q5_1:2,q5_2:2} },
    nonConformances:[
      { id:"nc018", section:"Common Areas & Meeting Rooms", finding:"Kitchen surfaces on 2nd floor not wiped down — food debris and used crockery left overnight", severity:"minor", photos:[], actionOwner:"Sarah Mitchell", actionDue:"2026-05-06", actionStatus:"complete", actionNote:"Kitchen cleaned and daily cleaning schedule reissued to all office staff." },
      { id:"nc019", section:"Welfare Facilities", finding:"Paper towels depleted in ground floor toilets — dispenser empty", severity:"minor", photos:[], actionOwner:"Sarah Mitchell", actionDue:"2026-05-05", actionStatus:"complete", actionNote:"Restocked immediately. Facilities checklist updated to include dispenser check." },
    ],
    summary:"Generally good office standard. Kitchen discipline on 2nd floor needs reinforcing. Welfare consumable checks to be included in daily facilities sweep.",
    nextDue:"2026-05-12",
  },
  {
    id:"si011", type:"warehouse_housekeeping", date:"2026-05-12", inspector:"Sarah Mitchell", location:"Warehouse, Goods-In & Loading Bay",
    status:"open", overallScore:24, maxScore:26,
    sections:{ s1:{q1_1:2,q1_2:2,q1_3:2}, s2:{q2_1:2,q2_2:2,q2_3:2}, s3:{q3_1:2,q3_2:2,q3_3:1}, s4:{q4_1:2,q4_2:2}, s5:{q5_1:2,q5_2:1} },
    nonConformances:[
      { id:"nc020", section:"Racking & Storage", finding:"Two pallets in Racking Row D positioned outside bay markings — protruding into forklift aisle", severity:"major", photos:[], actionOwner:"Mark Davies", actionDue:"2026-05-13", actionStatus:"open", actionNote:"" },
    ],
    summary:"Good warehouse standard overall. Racking bay discipline in Row D requires same-day action — forklift aisle clearance is safety critical.",
    nextDue:"2026-05-19",
  },
];
