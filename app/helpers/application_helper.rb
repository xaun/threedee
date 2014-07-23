module ApplicationHelper
  def smartnav
    links = "<div id='nav'><div id='inner-nav'>"
    if @current_user.try(:is_admin)
      links += "<div class='view-users-link'>" + link_to('View users', users_path) + "</div>"
    end

    if @current_user.present?
      links += "<div class='log-out-link'>"
      links += link_to('Logout ' + @current_user.username, login_path, :data => {:method => :delete, :confirm => 'Really logout?'})
      links += "</div>"
    else
      links += "<div id='sign-in-link'>#{ link_to('Sign in', login_path) }</div>"
      links += "<div id='sign-up-link'>#{ link_to('Sign up', new_user_path) }</div>"
    end

    links + '</div>'
    links + '</div>'
  end

end
