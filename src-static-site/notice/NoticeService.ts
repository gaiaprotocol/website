import {
  Constants,
  SupabaseService,
} from "@common-module/static-site-generator";
import Notice from "../database-interface/Notice.js";

class NoticeService extends SupabaseService<Notice> {
  constructor() {
    super("notices", "*", 100);
  }

  public async fetchNotices(lastCreatedAt?: string): Promise<Notice[]> {
    return await this.safeSelect((b) =>
      b.order("created_at", { ascending: false }).gt(
        "created_at",
        lastCreatedAt ?? Constants.UNIX_EPOCH_START_DATE,
      )
    );
  }
}

export default new NoticeService();
