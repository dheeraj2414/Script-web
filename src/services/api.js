import { APIPATH } from "../constants/index";
import axios from "axios";
import { helper } from "../utils/helper";
import LocalServices from "./LocalServices";

axios.interceptors.request.use(
  (config) => {
    const token = LocalServices.getServices("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    // config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default class Api {
  static fetchMediumBlog(blogLimit) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: "research",
      },
    };
    return axios
      .get(`${APIPATH.BASEURL}getAllMediumFeeds?limit=${blogLimit}`, options)
      .then((res) => res.data);
  }

  static getMarketPrice() {
    return axios
      .get(
        `${APIPATH.MARKETURL}?vs_currency=usd&ids=theta-token,theta-fuel&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      )
      .then((res) => res.data);
  }

  static getSupplyData() {
    return axios
      .get(`${APIPATH.EXPLORERURL}supplyData`)
      .then((res) => res.data);
  }

  static walletLogin(req, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.post(`${APIPATH.BASEURL}walletRegisterAndLogin`, req, options);
  }

  static solicalLogin(req, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };

    return axios.post(`${APIPATH.BASEURL}socialLogin`, req, options);
  }

  static emailVerification(req, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.post(`${APIPATH.BASEURL}emailVerification`, req, options);
  }
  static resendOtp(req, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.post(`${APIPATH.BASEURL}resendOTP`, req, options);
  }

  static checkUsernameOrEmailExist(email, username, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.get(
      `${APIPATH.BASEURL}checkEmailOrUsernameIsExists?email=${email}&username=${username}`,
      options
    );
  }

  static getUserDetailsByWalletAddress(walletAddress, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.get(
      `${APIPATH.BASEURL}getUserDetailsByWalletAddress?walletAddress=${walletAddress}`,
      options
    );
  }

  static getUserDetailByEmailAddress(email, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.get(
      `${APIPATH.BASEURL}getUserPrivilegesByUserEmail?emailId=${email}`,
      options
    );
  }
  static getChannels(screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.get(
      `${APIPATH.BASEURL}show/details?zoneId=${helper.getTimeZone()}`,
      options
    );
  }
  static getShows(screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.get(
      `${APIPATH.BASEURL}live/shows?zoneId=${helper.getTimeZone()}`,
      options
    );
  }

  static getVideoTokenEarned(userId, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.get(
      `${APIPATH.BASEURL}user/token/details?userId=${userId}`,
      options
    );
  }

  static addVideoToken(req, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.post(`${APIPATH.BASEURL}save/user/token`, req, options);
  }

  static saveVideoDuration(req, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.put(`${APIPATH.BASEURL}save/duration`, req, options);
  }

  static logout(req, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.post(`${APIPATH.BASEURL}logoutUser`, req, options);
  }

  static changePassword(req, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.post(`${APIPATH.BASEURL}changePassword`, req, options);
  }

  static getVideoWatchDuration(userId, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.get(
      `${APIPATH.BASEURL}videoWatchDuration?userId=${userId}`,
      options
    );
  }

  static getLastWatchShowHistory(userId, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.get(
      `${APIPATH.BASEURL}lastVideoHistory?userId=${userId}`,
      options
    );
  }

  static getTwitterPosts(screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.get(`${APIPATH.BASEURL}getAllTwitterFeeds`, options);
  }

  static viewUserProfile(userId, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.get(`${APIPATH.BASEURL}viewuserprofile?id=${userId}`, options);
  }

  static getCountryList(screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.get(`${APIPATH.BASEURL}getCountries`, options);
  }

  static getCategory(pageNo, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.get(`${APIPATH.BASEURL}getCategory?pageNo=${pageNo}`, options);
  }

  static getAllChannels(pageNo, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.get(
      `${APIPATH.BASEURL}getAllChannels?page=${pageNo}`,
      options
    );
  }

  static getVideoWatchAnalytics(userId, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.get(
      `${APIPATH.BASEURL}analytic/graph?userId=${userId}`,
      options
    );
  }

  static updateProfile(req, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.post(
      `${APIPATH.BASEURL}edituserProfile/uploadFile`,
      req,
      options
    );
  }

  static addComment(body, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.post(`${APIPATH.BASEURL}addComment`, body, options);
  }

  static getCommentByVideoId(vdoId, pageNo, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.get(
      `${APIPATH.BASEURL}getVideoComment?videoId=${vdoId}&pageNo=${pageNo}`,
      options
    );
  }

  static getLeaderboardData(pageNo, pageSize, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.get(
      `${APIPATH.BASEURL}getLeaderBoardLists?page=${pageNo}&size=${pageSize}`,
      options
    );
  }

  static getLatestDayReward(walletAddress, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.get(
      `${APIPATH.BASEURL}getLatestDayRewardOfUser?walletAddress=${walletAddress}`,
      options
    );
  }

  static collectReward(req, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.post(`${APIPATH.BASEURL}createReward`, req, options);
  }

  static subscribeChannel(req, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.post(`${APIPATH.BASEURL}subscribeChannel`, req, options);
  }

  static getChannelDetailByChannelId(channelId, isOwner, userId, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.get(
      `${APIPATH.BASEURL}getChannelByChannelId?channelId=${channelId}&isOwner=${isOwner}&userId=${userId}`,
      options
    );
  }

  static getPastSchedulingDetails(channelId, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.get(
      `${APIPATH.BASEURL}getPastSchedulingDetails?channelId=${channelId}`,
      options
    );
  }

  static getSchedulingDetailsByDate(channelId, date, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.get(
      `${APIPATH.BASEURL}getSchedulingDetailsByDate?channelId=${channelId}&date=${date}`,
      options
    );
  }

  static getCannelListByCategoryId(categoryId, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.get(
      `${APIPATH.BASEURL}channel/details?categoryId=${categoryId}`,
      options
    );
  }

  static reportIssue(req, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.post(`${APIPATH.BASEURL}reportIssue`, req, options);
  }

  static getMyRewardPointTotal(walletAddress, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.get(
      `${APIPATH.BASEURL}getMyRewardsTotal?walletAddress=${walletAddress}`,
      options
    );
  }

  static getChatRewardByUserId(userId, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.get(
      `${APIPATH.BASEURL}getChatRewardByUserId/${userId}`,
      options
    );
  }

  static saveTokenEarnedByChat(req, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };

    return axios.post(`${APIPATH.BASEURL}saveOrUpdateChatReward`, req, options);
  }

  static getAllUserRewardsData(walletAddress, pageNo, pageSize, screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.get(
      `${APIPATH.BASEURL}getAllUserRewardsData?walletAddress=${walletAddress}&page=${pageNo}&limit=${pageSize}`,
      options
    );
  }

  static getGlassesList(screenName) {
    const options = {
      headers: {
        ipAddress: "dummyData",
        latitude: "dummyData",
        longitude: "dummyData",
        countryName: "dummyData",
        screenName: screenName,
      },
    };
    return axios.get(
      `${APIPATH.BASEURL}getGlasses`,
      options
    );
  }
}
