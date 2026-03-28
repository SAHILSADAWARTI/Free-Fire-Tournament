import rawData from '@/../data.json';

interface Team {
  id: string;
  name: string;
  players: string[];
  logo?: string;
}

interface MatchResult {
  teamId: string;
  placement: number;
  kills: number;
}

interface Match {
  round: number;
  results: MatchResult[];
}

interface LeaderboardEntry {
  team: Team;
  matches: { round: number; points: number }[];
  totalPoints: number;
  totalKills: number;
}

const PLACEMENT_POINTS = [12, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0];

export const getData = () => {
  return rawData;
};

export const getLeaderboard = (): LeaderboardEntry[] => {
  const data = rawData;
  const teamsMap = new Map<string, LeaderboardEntry>();

  // Initialize
  data.teams.forEach((team: Team) => {
    teamsMap.set(team.id, {
      team,
      matches: [],
      totalPoints: 0,
      totalKills: 0
    });
  });

  // Calculate points
  data.matches.forEach((match: Match) => {
    match.results.forEach((result) => {
      const entry = teamsMap.get(result.teamId);
      if (entry) {
        let pPoints = 0;
        if (result.placement >= 1 && result.placement <= 12) {
            pPoints = PLACEMENT_POINTS[result.placement - 1];
        } else {
            pPoints = 0;
        }
        
        const mPoints = pPoints + result.kills;
        
        entry.matches.push({ round: match.round, points: mPoints });
        entry.totalPoints += mPoints;
        entry.totalKills += result.kills;
      }
    });
  });

  // Sort by total points (descending) then kills
  return Array.from(teamsMap.values()).sort((a, b) => {
    if (b.totalPoints !== a.totalPoints) {
      return b.totalPoints - a.totalPoints;
    }
    return b.totalKills - a.totalKills;
  });
};
