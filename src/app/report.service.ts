import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  getAllDailyReports(): Observable<any[]> {
    // Replace 'your_daily_reports_endpoint' with your actual backend API endpoint for getting daily reports
    return this.http.get<any[]>('http://localhost:3000/api/reports/get-daily-reports');
  }

  // Method to get all session reports
  getAllSessionReports(): Observable<any[]> {
    // Replace 'your_session_reports_endpoint' with your actual backend API endpoint for getting session reports
    return this.http.get<any[]>('http://localhost:3000/api/reports/get-sessions-reports');
  }

  getSessionReportById(reportId: string): Observable<any> {
    // Replace 'your_get_session_report_endpoint' with your actual backend API endpoint for getting an individual session report
    const url = `http://localhost:3000/api/reports/get-session-report/${reportId}`;
    
    return this.http.get<any>(url);
  }

  // Method to get an individual daily report by ID
  getDailyReportById(reportId: string): Observable<any> {
    // Replace 'your_get_daily_report_endpoint' with your actual backend API endpoint for getting an individual daily report
    const url = `http://localhost:3000/api/reports/get-daily-report/${reportId}`;
    return this.http.get<any>(url);
  }

  getSessionReportsByDateRange(startDate: string, endDate: string): Observable<any[]> {
    const url = 'http://localhost:3000/api/reports/session-report-by-date';
    const body = { startDate, endDate };
    return this.http.post<any[]>(url, body);
  }

  // Method to get daily reports by date range
  getDailyReportsByDateRange(startDate: string, endDate: string): Observable<any[]> {
    const url = 'http://localhost:3000/api/reports/daily-report-by-date';
    const body = { startDate, endDate };
    return this.http.post<any[]>(url, body);
  }
}
