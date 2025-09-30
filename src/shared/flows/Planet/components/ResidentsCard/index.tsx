import { GetPeopleUseCase } from '@/@core/application/people/get-people.use-case';
import { People } from '@/@core/domain/entities/people';
import { container } from '@/@core/infra/container-registry';
import { Registry } from '@/@core/infra/registry';
import Card from '@/shared/components/ui/Card';
import PeopleIcon from '@/shared/components/ui/Icons/PeopleIcon';
import { extractId } from '@/shared/utils/extract-id';
import { ResidentsCardProps } from './types';

const getPeopleUseCase = container.get<GetPeopleUseCase>(
  Registry.GetPeopleUseCase,
);

const getResidents = async (residents: string[]) => {
  const residentPromises = residents
    .map(extractId)
    .filter((id) => id)
    .map((id) => getPeopleUseCase.execute(id));

  const results = await Promise.allSettled(residentPromises);

  const residentsResponse = results
    .filter(
      (result): result is PromiseFulfilledResult<People> =>
        result.status === 'fulfilled',
    )
    .map((result) => result.value);

  const rejectedCount = results.filter((r) => r.status === 'rejected').length;
  if (rejectedCount > 0) {
    console.warn(
      `[ResidentsCard] ${rejectedCount} residents requests failed or timed out. The error was handled, and valid data will be displayed.`,
    );
  }

  const residentNames = residentsResponse.map((p) => p.toJSON().name);
  return residentNames;
};

async function ResidentsCard({ residents }: ResidentsCardProps) {
  let residentsNames: string[] = [];

  try {
    residentsNames = await getResidents(residents);
  } catch (error) {
    console.error('ERRO CRÍTICO no ResidentsCard:', error);

    throw new Error(
      'Falha na aquisição de dados de residentes. Tente um novo Salto no Hiperespaço.',
    );
  }
  return (
    <Card icon={<PeopleIcon />} title="Residents" items={residentsNames} />
  );
}

export default ResidentsCard;
