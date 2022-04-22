import { find, update } from '../util/db';
import getSlug from '../util/getSlug';

const incidentCollection: string = 'incidents';

async function run(): void {
    const incidents: $TSFixMe = await find(
        incidentCollection,
        {
            deleted: false,
            slug: { $exists: false },
        },
        null,
        8000 // Limit to 8k items
    );

    for (const incident of incidents) {
        const slug: $TSFixMe = getSlug(incident.idNumber);
        await update(incidentCollection, { _id: incident._id }, { slug });
    }

    return `Script completed`;
}

export default run;