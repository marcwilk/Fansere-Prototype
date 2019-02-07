import TeamMap from './TeamMap'

export default class NBA {
  constructor() {
    this.STATS_URL = `https://stats.nba.com/`
    this.DATA_URL = `https://data.nba.net/`
  }

  nbaFetch = (url, flatten=false) => {
    const options = {
      headers: {
        "accept-encoding": "Accepflate, sdch",
        "accept-language": "he-IL,he;q=0.8,en-US;q=0.6,en;q=0.4",
        "cache-control": "max-age=0",
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        connection: "keep-alive",
        "user-agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36"
      },
      json: false
    }

    return new Promise((resolve, reject) => {
      fetch(url, options)
      .then(response => response.json())
      .then(json => flatten ? this.flattenResult(json.resultSets || [json.resultSet]) : resolve(json))
      .then(flattened => resolve(flattened))
      .catch(error => reject(error))
    })
  }

  objectToQueryString = (obj) => {
    return Object.keys(obj).map(function(key){
      const value = encodeURIComponent(obj[key])
      return key + '=' + value
    }).join('&')
  }

  flattenResult = (resultSets) => {
    return new Promise((resolve, reject) => {
      let flattened = {}
      resultSets.forEach((result, i) => {

        flattened[result.name] = result.rowSet.map((row, j) => {
          let mappedRow = {}

          row.forEach((value, k) => {
            let key = result.headers[k].toLowerCase()
            mappedRow[key] = value
          })

          return mappedRow
        })
      })

      return resolve(flattened)
    })
  }

  getGames = (obj) => {
    if (typeof(obj) === `object`) {
      const endpoint = `stats/scoreboardV2/?`
      const defaults = {
        DayOffset: '0',
        LeagueID: '00',
      }
      obj = {...obj, ...defaults}
      const queryString = this.objectToQueryString(obj)
      const url = this.STATS_URL + endpoint + queryString
      return this.nbaFetch(url, true)
    }
  }

  getGames = (date) => {
    const dateArray = date.split('/')
    let year = dateArray[2]
    let day = dateArray[1]
    let month = dateArray[0]

    day = day.length === 1 ? '0' + day : day
    month = month.length === 1 ? '0' + month : month

    const formattedDate = year + month + day

    const url = `https://data.nba.net/prod/v2/${formattedDate}/scoreboard.json`
    return this.nbaFetch(url)
  }

  getTeam = (obj) => {
    if (typeof(obj) === `object`) {
      const endpoint = `stats/teaminfocommon?`
      const defaults = {
        LeagueID: '00',
        SeasonType: 'Regaular+Season'
      }
      obj = {...obj, ...defaults}
      const queryString = this.objectToQueryString(obj)
      const url = this.STATS_URL + endpoint + queryString
      return this.nbaFetch(url, true)
    }
  }

  getRoster = (obj) => {
    const endpoint = `stats/commonteamroster?`
    const defaults = {
      LeagueID: '00'
    }
    obj = {...obj, ...defaults}
    const queryString = this.objectToQueryString(obj)
    const url = this.STATS_URL + endpoint + queryString
    return this.nbaFetch(url, true)
  }

  getPlayer = (obj) => {
    const queryString = this.objectToQueryString(obj)
    const url = this.STATS_URL + 'stats/commonplayerinfo?' + queryString
    return this.nbaFetch(url, true)
  }

  getPlayers = (season) => {
    const url = `https://data.nba.net/prod/v1/${season}/players.json`
    return this.nbaFetch(url)
  }

  getTeams = (year) => {
    const endpoint = `prod/v1/${year}/teams.json`
    const url = this.DATA_URL + endpoint
    return this.nbaFetch(url)
  }

  getLeagueStandings = () => {
    const endpoint = `prod/v1/current/standings_conference.json`
    const url = this.DATA_URL + endpoint
    return this.nbaFetch(url)
  }

  getPlayByPlay = (gameID) => {
    const endpoint = 'stats/playbyplay?'
    const defaults = {
      GameID: gameID,
      StartPeriod: 1,
      EndPeriod: 14
    }
    const url = this.STATS_URL + endpoint + this.objectToQueryString(defaults)
    return this.nbaFetch(url, true)
  }

  getPlayByPlayExperimental = async (gameID, date) => {
    const dateArray = date.split('/')
    let year = dateArray[2]
    let day = dateArray[1]
    let month = dateArray[0]

    day = day.length === 1 ? '0' + day : day
    month = month.length === 1 ? '0' + month : month

    const formattedDate = year + month + day

    const q1URL = `https://data.nba.net/prod/v1/${formattedDate}/${gameID}_boxscore_1.json`
    const q2URL = `https://data.nba.net/prod/v1/${formattedDate}/${gameID}_boxscore_2.json`
    const q3URL = `https://data.nba.net/prod/v1/${formattedDate}/${gameID}_boxscore_3.json`
    const q4URL = `https://data.nba.net/prod/v1/${formattedDate}/${gameID}_boxscore_4.json`


  }

  getBoxscore = (gameID, date) => {
    const dateArray = date.split('/')
    let year = dateArray[2]
    let day = dateArray[1]
    let month = dateArray[0]

    day = day.length === 1 ? '0' + day : day
    month = month.length === 1 ? '0' + month : month

    const formattedDate = year + month + day
    const endpoint = `https://data.nba.net/prod/v1/${formattedDate}/${gameID}_boxscore.json`

    return this.nbaFetch(endpoint)
  }

  getPlayByPlay = (gameID, season) => {
    const endpoint = `https://data.nba.com/data/10s/v2015/json/mobile_teams/nba/${season}/scores/pbp/${gameID}_full_pbp.json`
    return this.nbaFetch(endpoint)
  }

  getPlayerImage = (playerID) => {
    return `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${playerID}.png`
  }

  getPlayerCareerStats = (playerID, perMode='PerGame') => {
    const query = {
      PlayerID: playerID,
      PerMode: perMode
    }
    const endpoint = `stats/playerprofilev2?`
    const url = this.STATS_URL + endpoint + this.objectToQueryString(defaults)
    return this.nbaFetch(url, true)
  }

  getCompletePlayerGameLog = (playerID) => {
    const endpoint = `stats/playergamelog?`
    const regularSeasonQuery = {
      playerID: playerID,
      season: 'ALL',
      seasonType: 'Regular Season'
    }
    const playoffQuery = {
      playerID: playerID,
      season: 'ALL',
      seasonType: 'Playoffs'
    }
    const regularSeasonURL = this.STATS_URL + endpoint + this.objectToQueryString(regularSeasonQuery)
    const playoffURL = this.STATS_URL + endpoint + this.objectToQueryString(playoffQuery)

    return Promise.all([
      this.nbaFetch(regularSeasonURL, true),
      this.nbaFetch(playoffURL, true),
    ]).then((result) => {
      return {
        regularSeason: result[0].PlayerGameLog,
        playoffs: result[1].PlayerGameLog
      }
    })
    .catch((error) => {
      console.log(error)
    })
  }

  getSeasonPlayerGameLog = (playerID, season) => {
    season = season +  '-' + (parseInt(season.toString().substr(-2)) + 1)
    const endpoint = `stats/playergamelog?`
    const regularSeasonQuery = {
      playerID: playerID,
      season: season,
      seasonType: 'Regular Season'
    }
    const playoffQuery = {
      playerID: playerID,
      season: season,
      seasonType: 'Playoffs'
    }
    const regularSeasonURL = this.STATS_URL + endpoint + this.objectToQueryString(regularSeasonQuery)
    const playoffURL = this.STATS_URL + endpoint + this.objectToQueryString(playoffQuery)

    return Promise.all([
      this.nbaFetch(regularSeasonURL, true),
      this.nbaFetch(playoffURL, true),
    ]).then((result) => {
      return {
        regularSeason: result[0].PlayerGameLog,
        playoffs: result[1].PlayerGameLog
      }
    })
    .catch((error) => {
      console.log(error)
    })
  }

  getLeadTrackerForQuarter = (gameID, date, quarter) => {
    const dateArray = date.split('/')
    let year = dateArray[2]
    let day = dateArray[1]
    let month = dateArray[0]

    day = day.length === 1 ? '0' + day : day
    month = month.length === 1 ? '0' + month : month

    const formattedDate = year + month + day
    const endpoint = `https://data.nba.net/prod/v1/${formattedDate}/${gameID}_lead_tracker_${quarter}.json`
    return this.nbaFetch(endpoint)
  }

  getLeadTrackerForGame = (gameID, date) => {
    return Promise.all([
      this.getLeadTrackerForQuarter(gameID, date, 1),
      this.getLeadTrackerForQuarter(gameID, date, 2),
      this.getLeadTrackerForQuarter(gameID, date, 3),
      this.getLeadTrackerForQuarter(gameID, date, 4),
      this.getLeadTrackerForQuarter(gameID, date, 5),
      this.getLeadTrackerForQuarter(gameID, date, 6),
    ]).then((result) => {
      const leadTrackerArray = [].concat.apply([], result.map(quarter => quarter.plays))
      return leadTrackerArray
    })
    .catch((error) => {
      console.log(error)
    })
  }

  getMiniBoxscore = (gameID, date) => {
    const dateArray = date.split('/')
    let year = dateArray[2]
    let day = dateArray[1]
    let month = dateArray[0]

    day = day.length === 1 ? '0' + day : day
    month = month.length === 1 ? '0' + month : month

    const formattedDate = year + month + day
    const endpoint = `https://data.nba.net/prod/v1/${formattedDate}/${gameID}_mini_boxscore.json`
    return this.nbaFetch(endpoint)
  }

  getTeamGamelog = (teamID, season) => {
    season = season +  '-' + season.toString().substr(-2)
    const endpoint = `stats/teamgamelog?`
    const regularSeasonQuery = {
      teamID: teamID,
      season: season,
      seasonType: 'Regular Season'
    }
    const playoffQuery = {
      teamID: teamID,
      season: season,
      seasonType: 'Playoffs'
    }
    const regularSeasonURL = this.STATS_URL + endpoint + this.objectToQueryString(regularSeasonQuery)
    const playoffURL = this.STATS_URL + endpoint + this.objectToQueryString(playoffQuery)

    return Promise.all([
      this.nbaFetch(regularSeasonURL, true),
      this.nbaFetch(playoffURL, true),
    ]).then((result) => {
      return {
        Games: {
          regularSeason: result[0].TeamGameLog,
          playoffs: result[1].TeamGameLog
        }
      }
    })
    .catch((error) => {
      console.log(error)
    })
  }

  getPlayerDashboardByYear = (playerID, season) => {
    season = season +  '-' + (parseInt(season.toString().substr(-2)) + 1)
    const endpoint = 'stats/playerdashboardbyyearoveryear?'
    const query = {
      DateFrom: '',
      DateTo: '',
      GameSegment: '',
      LastNGames: '0',
      LeagueID: '00',
      Location: '',
      MeasureType: 'Base',
      Month: '0',
      OpponentTeamID: '0',
      Outcome: '',
      PORound: '0',
      PaceAdjust: 'N',
      PerMode: 'PerGame',
      Period: '0',
      PlayerID: playerID,
      PlusMinus: 'N',
      Rank: 'N',
      Season: season,
      SeasonSegment: '',
      SeasonType: 'Regular Season',
      ShotClockRange: '',
      Split: 'yoy',
      VsConference: '',
      VsDivision: ''
    }
    const url = this.STATS_URL + endpoint + this.objectToQueryString(query)
    return this.nbaFetch(url, true)
  }

  getLeagueLeaders = (season, category) => {
    season = season +  '-' + (parseInt(season.toString().substr(-2)) + 1)
    const endpoint = 'stats/leagueleaders?'
    const query = {
      LeagueID: '00',
      PerMode: 'PerGame',
      Scope: 'S',
      Season: season,
      SeasonType: 'Regular Season',
      StatCategory: category
    }
    const url = this.STATS_URL + endpoint + this.objectToQueryString(query)
    return this.nbaFetch(url, true)
  }

  getTeamSchedule = (season, teamName) => {
    const endpoint = `data/10s/prod/v1/${season}/teams/${teamName}/schedule.json`
    const url = this.DATA_URL + endpoint
    return this.nbaFetch(url)
  }

  getBoxscoreAdvanced = (gameID) => {
    const endpoint = `stats/boxscoreadvancedv2?`
    const query = {
      EndPeriod: 0,
      EndRange: 0,
      GameId: gameID,
      RangeType: 0,
      StartPeriod: 0,
      StartRange: 0
    }
    const url = this.STATS_URL + endpoint + this.objectToQueryString(query)
    return this.nbaFetch(url, true)
  }

  getBoxscoreMisc = (gameID) => {
    const endpoint = `stats/boxscoremiscv2?`
    const query = {
      EndPeriod: 0,
      EndRange: 0,
      GameId: gameID,
      RangeType: 0,
      StartPeriod: 0,
      StartRange: 0
    }
    const url = this.STATS_URL + endpoint + this.objectToQueryString(query)
    return this.nbaFetch(url, true)
  }

  getBoxscoreUsage = (gameID) => {
    const endpoint = `stats/boxscoreusagev2?`
    const query = {
      EndPeriod: 0,
      EndRange: 0,
      GameId: gameID,
      RangeType: 0,
      StartPeriod: 0,
      StartRange: 0
    }
    const url = this.STATS_URL + endpoint + this.objectToQueryString(query)
    return this.nbaFetch(url, true)
  }

  getBoxscoreHustle = (gameID) => {
    const endpoint = `stats/hustlestatsboxscore?gameid=${gameID}`
    const url = this.STATS_URL + endpoint
    return this.nbaFetch(url, true)
  }

  getBoxscorePlayerTrack = (gameID) => {
    const endpoint = `stats/boxscoreplayertrackv2?`
    const query = {
      EndPeriod: 0,
      EndRange: 0,
      GameId: gameID,
      RangeType: 0,
      StartPeriod: 0,
      StartRange: 0
    }
    const url = this.STATS_URL + endpoint + this.objectToQueryString(query)
    return this.nbaFetch(url, true)
  }

  getAdditionalBoxscoreStatsForPlayer = (gameID, playerID) => {
    return Promise.all([
      this.getBoxscoreAdvanced(gameID),
      this.getBoxscoreMisc(gameID),
      this.getBoxscoreUsage(gameID),
      this.getBoxscoreHustle(gameID),
      this.getBoxscorePlayerTrack(gameID),
    ]).then((result) => {
      result.filter((obj) => {
        for (let key in obj) {
          if (key.match(/Player/)) {
            let values = obj[key]

            obj[key] = values.filter((o) => {
              return o.player_id === playerID
            })
          } else {
            delete obj[key]
          }
        }
      })
      return {
        BoxscoreAdvanced: result[0].PlayerStats[0],
        BoxscoreMisc: result[1].sqlPlayersMisc[0],
        BoxscoreUsage: result[2].sqlPlayersUsage[0],
        BoxscoreHustle: result[3].PlayerStats[0],
        BoxscorePlayerTrack: result[4].PlayerStats[0]
      }
    })
    .catch((error) => {
      console.log(error)
    })
  }
}

export const getTeamFromTeamMap = (teamID) => {
  const team = Object.keys(TeamMap).find((x) => {
    return TeamMap[x].id == teamID
  })
  return TeamMap[team]
}
