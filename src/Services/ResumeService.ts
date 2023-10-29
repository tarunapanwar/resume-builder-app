import ApiUtility from "../ApiUtility";

class ResumeService {
    route = '/api/resume';

    getResume = () => ApiUtility.get(`${this.route}`, null);
};
export default new ResumeService;