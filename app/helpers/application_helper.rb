module ApplicationHelper
  def smartnav
    links = '<div id="nav">'
    if @current_user.try(:is_admin)
      links += "<li><h2>" + link_to('View users', users_path) + "/<h2></li>"
    end

    if @current_user.present?
      links += "<li><h2>"
      links += link_to('Logout ' + @current_user.username, login_path, :data => {:method => :delete, :confirm => 'Really logout?'})
      links += "</h2></li>"
    else
      links += "<li><h2>#{ link_to('Sign up', new_user_path) }</h2></li>"
      links += "<li><h2>#{ link_to('Sign in', login_path) }</h2></li>"
    end

    links + '</div>'
  end

end