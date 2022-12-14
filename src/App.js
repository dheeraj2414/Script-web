import ConnectWalletModal from "components/ConnectWalletModal";
import ScrollToTop from "components/ScrollToTop";
import DashboardLayout from "layouts/DashboardLayout";
import UnlockWalletPageLayout from "layouts/UnlockWalletPageLayout";
import AccountDetails from "pages/AccountDetails";
import Calculator from "pages/Calculator";
import ConnectWallet from "pages/ConnectWallet";
import CookiesPolicy from "pages/CookiesPolicy";
import Analytics from "pages/Dashboard/Analytics";
import ChangePassword from "pages/Dashboard/ChangePassword";
import EditProfile from "pages/Dashboard/EditProfile";
import ShareRefferal from "pages/Dashboard/ShareRefferal";
import TokenMapping from "pages/Dashboard/TokenMapping";
import Home from "pages/Dashboard/Home";
import Details from "pages/Details";
import Explorer from "pages/Explorer";
import FAQ from "pages/FAQ";
import HomePage from "pages/HomePage";
import Login from "pages/Login";
import Marketplace from "pages/Marketplace";
import PrivacyPolicy from "pages/PrivacyPolicy";
import Register from "pages/Regsiter";
import Research from "pages/Research";
import Rewards from "pages/Rewards";
import Stake from "pages/Stake";
import Technology from "pages/Technology";
import TermsAndConditions from "pages/TermsAndConditions";
import TokenPage from "pages/TokenPage";
import TvHomepage from "pages/TvHomepage";
import KeyStore from "pages/UnlockWallet/KeyStore";
import Mnemonics from "pages/UnlockWallet/Mnemonics";
import PrivateKey from "pages/UnlockWallet/PrivateKey";
import Validator from "pages/Validator";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmailConfirmation from "components/EmailConfirmation";
import CreatePasswordForm from "components/CreatePasswordForm";
import EpgModal from "sections/TvHomepage/EpgModal";
import VerifyAccount from "pages/VerifyAccount";
import PrivateRoute from "auth/PrivateRoute";
import ComingSoon from "pages/coming-soon";
import Watch from "pages/Watch";
import { useEffect } from "react";
import MixPanelService from "services/mixPanelService";
import LeaderBoard from "pages/Leaderboard";
import AllChannels from "pages/AllChannels";
import AllCategory from "pages/AllCategory";
import ChannelDetail from "pages/ChannelDetail";
import CategoryDetail from "pages/CategoryDetail";
import ReportIssue from "pages/ReportIssue";
import TableModal from "components/TableModal";
import GlassListingPopup from "components/GlassListingPopup";

function App() {
  useEffect(() => {
    try {
      console.log("init mixpanel");
      MixPanelService.init();
    } catch (error) {
      console.log("error while connecting mixpanel", error);
    }
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <ConnectWalletModal />
      <TableModal />
      <GlassListingPopup />
      <EpgModal />
      <EmailConfirmation />
      <CreatePasswordForm />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/token" element={<TokenPage />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/node" element={<Validator />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/research" element={<Research />} />
        <Route path="/terms-condition" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookies-policy" element={<CookiesPolicy />} />
        <Route path="/faq" element={<FAQ />} />

        {/* TV ROUTES */}
        <Route path="/tv" element={<TvHomepage />} />
        <Route path="/all-channels" element={<AllChannels />} />
        <Route path="/all-categories" element={<AllCategory />} />
        <Route path="/channel-detail" element={<ChannelDetail />} />
        <Route path="/category-detail" element={<CategoryDetail />} />
        <Route
          path="/report-issue"
          element={
            <PrivateRoute>
              <ReportIssue />
            </PrivateRoute>
          }
        />

        <Route path="/watch" element={<Watch />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify-account" element={<VerifyAccount />} />
        <Route path="explorer" element={<Explorer />} />
        <Route path="stake" element={<Stake />} />
        <Route path="account-details" element={<AccountDetails />} />

        <Route path="connect-wallet" element={<ConnectWallet />} />

        <Route path="/unlock-wallet" element={<UnlockWalletPageLayout />}>
          <Route path="key-store" element={<KeyStore />} />
          <Route path="mnemonics" element={<Mnemonics />} />
          <Route path="private-key" element={<PrivateKey />} />
        </Route>

        <Route
          path="dashboard"
          element={
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          }
        >
          <Route
            path=""
            index
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="change-password"
            element={
              <PrivateRoute>
                <ChangePassword />
              </PrivateRoute>
            }
          />
          <Route
            path="edit-profile"
            element={
              <PrivateRoute>
                <EditProfile />
              </PrivateRoute>
            }
          />
          <Route
            path="share-referral"
            element={
              <PrivateRoute>
                <ShareRefferal />
              </PrivateRoute>
            }
          />
          {/* <Route path="token-mapping" element={<PrivateRoute><TokenMapping /></PrivateRoute>} /> */}
          {/* <Route path="reward" element={<Rewards />} /> */}
          <Route path="leaderboard" element={<LeaderBoard />} />
          <Route
            path="analytics"
            element={
              <PrivateRoute>
                <Analytics />
              </PrivateRoute>
            }
          />
          <Route path="coming-soon" element={<ComingSoon />} />
        </Route>

        {/* MARKETPLACE */}
        <Route path="marketplace" element={<Marketplace />} />
        <Route path="details" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
