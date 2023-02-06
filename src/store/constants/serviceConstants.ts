import { REACT_APP_API_TRENDING_MOVIES_SERVICE, REACT_APP_API_DISCOVER_MOVIES_SERVICE, REACT_APP_API_COMMENT_SERVICE } from '@env';

const userValue = process.env.REACT_APP_API_USER_SERVICE!.toString();
const trendingMoviesValue = REACT_APP_API_TRENDING_MOVIES_SERVICE!.toString();
const discoverMoviesValue = REACT_APP_API_DISCOVER_MOVIES_SERVICE!.toString();
const commentsValue = REACT_APP_API_COMMENT_SERVICE!.toString();

export class SERVICES {
  static readonly USER_SERVICE = new SERVICES(userValue, 'USER_SERVICE');
  static readonly TRENDING_MOVIES_SERVICE = new SERVICES(trendingMoviesValue, 'TRENDING_MOVIES_SERVICE');
  static readonly DISCOVER_MOVIES_SERVICE = new SERVICES(discoverMoviesValue, 'DISCOVER_MOVIES_SERVICE');
  static readonly COMMENTS_SERVICE = new SERVICES(commentsValue, 'COMMENTS_SERVICE');

  // private to disallow creating other instances of this type
  private constructor(private readonly key: string, public readonly value: any) {}

  toString() {
    return this.key;
  }
}
