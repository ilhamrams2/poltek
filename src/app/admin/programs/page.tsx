import { getPrograms } from "@/actions/cms";
import ProgramsList from "./ProgramsList";

export default async function ProgramsPage() {
  const programs = await getPrograms();

  return <ProgramsList initialPrograms={programs} />;
}
