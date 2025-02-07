import { useNavigate } from "react-router-dom";

export const useUtmNavigation = () => {
  const navigate = useNavigate();

  const navigateWithUtm = (path: string) => {
    // 現在のURLパラメータを取得
    const currentParams = new URLSearchParams(window.location.search);
    const utmParams = ['utm_source', 'utm_medium', 'utm_campaign']
      .map(param => currentParams.get(param))
      .filter(value => value !== null)
      .map((value, index) => `${['utm_source', 'utm_medium', 'utm_campaign'][index]}=${value}`)
      .join('&');

    // UTMパラメータが存在する場合、それらを含めたURLを生成
    const targetPath = utmParams ? `${path}?${utmParams}` : path;
    navigate(targetPath);
  };

  return navigateWithUtm;
};
