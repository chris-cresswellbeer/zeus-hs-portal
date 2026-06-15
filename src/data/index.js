// Central re-export for all seed/static data
// Import from here rather than individual files where convenient

export { USERS } from "./seedStaff.js";
export {
  TRAINING_MODULES,
  HS_DOCS,
  INIT_ASSIGN,
  INIT_COMPLETE,
} from "./seedModules.js";
export {
  INCIDENT_TYPES,
  ACCIDENT_CODES,
  NUMBER_CODES,
  INJURY_TYPES,
  INIT_INCIDENTS,
} from "./incidentConstants.js";
export { makeDseReport, INIT_DSE_REPORTS } from "./seedDse.js";
export { INIT_RAS } from "./seedRiskAssessments.js";
export { INIT_MACHINE_COMPS } from "./seedMachinery.js";
export { INIT_INVESTIGATIONS } from "./seedInvestigations.js";
export { INIT_EQUIPMENT } from "./seedEquipment.js";
export { INIT_SITE_INSPECTIONS } from "./seedInspections.js";
export {
  INIT_FIRE_WARDENS,
  INIT_FIRE_DRILLS,
  INIT_ALARM_TESTS,
  INIT_EXTINGUISHERS,
  INIT_EMERG_LIGHTING,
  INIT_FRA_REVIEWS,
} from "./seedFireSafety.js";
