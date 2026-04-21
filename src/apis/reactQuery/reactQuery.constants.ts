import { handleClientExceptions } from '@/core/helpers/clientExceptions.helper'
import { QueryClient } from '@tanstack/react-query'

import { getAdminOrdersApi, postAdminAuthUserEmailpassApi } from '../apis/adminApis'
import {
  getUserEmailAvailabilityApi,
  getUserProfile,
  postLoginApi,
  postRefreshToken,
  postRegisterApi,
  postUserLogout,
} from '../apis/authApis'
import {
  createDiscourseCommentApi,
  createDiscourseReviewApi,
  deleteDiscourseCommentApi,
  deleteDiscourseReviewApi,
  getDiscourseMyFeedApi,
  getDiscourseMyFollowingsApi,
  getDiscourseMyReviewsApi,
  getDiscourseNotificationsApi,
  getDiscourseNotificationsUncreadsCountApi,
  getDiscourseReviewApi,
  getDiscourseReviewCommentsApi,
  getDiscourseReviewsApi,
  getDiscourseStatisticsUserApi,
  getDiscourseUsersApi,
  getSiteSearchQueryTextApi,
  postDiscourseFollowerApi,
  postDiscourseLikeApi,
  postDiscourseNotificationsMarkAllAsReadApi,
  putUpdateDiscourseNotificationApi,
  updateDiscourseCommentApi,
  updateDiscourseReviewApi,
} from '../apis/discourseApis'
import { getIpLocationApi } from '../apis/locationApis'
import { postVintagesSearchApi } from '../apis/vintageApis'
import { QueryKeyApisType } from '../types/reactQuery.types'

export const QUERY_CLIENT = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      staleTime: 900000,
    },
    mutations: {
      onError: error => handleClientExceptions(error, 'mutation'),
    },
  },
})

export const QUERY_KEYS = {
  location: {
    ipLocation: 'Ip location',
  },
  admin: {
    authUserEmailpass: 'admin authUserEmailpass',
    orders: 'admin orders',
  },
  auth: {
    userEmailAvailability: 'User email availability',
    login: 'auth Login',
    register: 'auth register',
    logout: 'auth Logout',
    profile: 'User Profile',
    refreshToken: 'auth Refresh token',
  },
  products: {
    search: 'search products',
  },
  quiz: {
    quizSubmission: 'Quiz submission',
  },
  discourse: {
    users: `Discourse Users`,
    reviews: `Discourse Reviews`,
    followers: `Discourse User followed/unfollowed successfully.`,
    myFeed: `Discourse My feed`,
    comments: `Discourse Comments`,
    like: `Discourse Comment liked successfully.`,
    myReviews: `Discourse My reviews`,
    myFollowings: `Discourse My followings`,
    statisticsUser: `Discourse user statistics`,
    reviewImages: `Review images`,
    siteSearchQueryText: `Discourse site search query text`,
    notifications: `Discourse Notifications`,
    notificationsUnreads: `Discourse Notifications unread`,
    notificationMarkAsRead: `Discourse Notification mark as read.`,
  },
}

export const QUERY_KEY_APIS: QueryKeyApisType = {
  [QUERY_KEYS.admin.authUserEmailpass]: {
    createApi: postAdminAuthUserEmailpassApi,
  },
  [QUERY_KEYS.admin.orders]: {
    listApi: getAdminOrdersApi,
  },

  [QUERY_KEYS.products.search]: {
    listApi: postVintagesSearchApi,
  },

  // AUTH
  [QUERY_KEYS.auth.userEmailAvailability]: {
    createApi: getUserEmailAvailabilityApi,
  },
  [QUERY_KEYS.auth.login]: {
    createApi: postLoginApi,
  },
  [QUERY_KEYS.auth.register]: {
    createApi: postRegisterApi,
  },
  [QUERY_KEYS.auth.profile]: {
    createApi: getUserProfile,
  },
  [QUERY_KEYS.auth.logout]: {
    createApi: postUserLogout,
  },
  [QUERY_KEYS.auth.refreshToken]: {
    createApi: postRefreshToken,
  },

  [QUERY_KEYS.location.ipLocation]: {
    listApi: getIpLocationApi,
  },

  // Discourse
  [QUERY_KEYS.discourse.users]: {
    listApi: getDiscourseUsersApi,
  },
  [QUERY_KEYS.discourse.myFeed]: {
    listApi: getDiscourseMyFeedApi,
  },
  [QUERY_KEYS.discourse.myReviews]: {
    listApi: getDiscourseMyReviewsApi,
  },
  [QUERY_KEYS.discourse.myFollowings]: {
    listApi: getDiscourseMyFollowingsApi,
  },
  [QUERY_KEYS.discourse.statisticsUser]: {
    singleApi: getDiscourseStatisticsUserApi,
  },
  [QUERY_KEYS.discourse.reviews]: {
    listApi: getDiscourseReviewsApi,
    singleApi: getDiscourseReviewApi,
    createApi: createDiscourseReviewApi,
    updateApi: updateDiscourseReviewApi,
    deleteApi: deleteDiscourseReviewApi,
  },
  [QUERY_KEYS.discourse.comments]: {
    singleApi: getDiscourseReviewCommentsApi,
    createApi: createDiscourseCommentApi,
    updateApi: updateDiscourseCommentApi,
    deleteApi: deleteDiscourseCommentApi,
  },
  [QUERY_KEYS.discourse.notifications]: {
    listApi: getDiscourseNotificationsApi,
    updateApi: putUpdateDiscourseNotificationApi,
  },
  [QUERY_KEYS.discourse.notificationsUnreads]: {
    listApi: getDiscourseNotificationsUncreadsCountApi,
  },
  [QUERY_KEYS.discourse.notificationMarkAsRead]: {
    createApi: postDiscourseNotificationsMarkAllAsReadApi,
  },

  [QUERY_KEYS.discourse.followers]: {
    createApi: postDiscourseFollowerApi,
  },
  [QUERY_KEYS.discourse.like]: {
    createApi: postDiscourseLikeApi,
  },
  [QUERY_KEYS.discourse.siteSearchQueryText]: {
    listApi: getSiteSearchQueryTextApi,
  },
}
